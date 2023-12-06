import axios from "axios";
import { notification } from 'antd';
import {setCookie} from '../utils/Cookie'
import { useNavigate  } from "react-router-dom";
// 基础路径设置
function useRequest(){
    const navigate = useNavigate()
    const reuest = axios.create({
        baseURL: '/api',
        // timeout: 5000
    })
    // 请求拦截
    reuest.interceptors.request.use((config)=>{
        setCookie('l', 0)
        return config;
    })
    // 响应拦截
    reuest.interceptors.response.use((res)=>{
        console.log(res)
        if(res.data.code != 0 ){
            notification.error({
                message: res.data.message,
                duration: 2.5,
            });
            if(res.data.code == 500){
                navigate('/login')
                console.log('需要登陆了')
            }
            return Promise.reject(res.data);
        }
        return Promise.resolve(res.data);
    }, (error)=>{
        console.log(error.response);
        notification.warning({
            message: error.response,
            duration: 2.5,
        });
        return Promise.reject(error.response);
    })
    return [reuest]
}


export default useRequest

