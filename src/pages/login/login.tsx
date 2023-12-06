import MyHeader from '../../layout/Header/Header'
import './login.less'
import { Input, Button, notification} from 'antd';
import { useState } from 'react';
import useRequest from '../../api/request2';
import { useNavigate  } from "react-router-dom";

function Login(){
    const [logState, setLogState] = useState(true)
    
    return(
        <div className='myLogin'>
           <MyHeader data={{
            isTrue: false,
            background: 'white',
            color: 'black'
            }}></MyHeader>

           <div className='body'>

           <div className="right-content">
                {logState? 
                    <Log onShow={()=>{
                        setLogState(false)
                    }} ></Log> :
                    <Sign onShow={()=>{
                        setLogState(true)
                    }} ></Sign>
                }
           </div>

           </div>

           <Bottom></Bottom>
        </div>

        
    )
}

function Bottom (){
    return(
        <div className='bottom'>
            <div style={{textAlign: 'center'}}>
                <span className='item' >Careers</span>
                <span className='item' >Contact Us</span>
                <span className='item' >Disclaimers</span>
                <span className='item' >Privacy</span>
                <span className='item' >Terms of Use</span>
            </div>
            <br/>
            <br/>
            <hr style={{borderColor: '#4f667e'}} />
            <br/>
            <span style={{float: 'left', width: '15%'}}><img style={{marginTop: '-20px'}} src="/src/assets/Logo.svg" width="100px" /></span>
            <span style={{float: 'left', width: '75%', fontSize: '11px'}}>gold-origin.com is the global source of information and access to financial services provided by the Goldriven.
            © 2023 Goldriven co. All rights reserved. This website supports IPv6.</span>
        </div>
    )
}

function Log({onShow}){
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const navigate = useNavigate()
    const [axios] = useRequest()
    console.log(axios)
    function login(){
        let formData = new FormData();
        formData.append("username", userName)
        formData.append("password", passWord)
        axios({
            method: 'POST',
            data: formData,
            url: '/user/login'
        }).then(res =>{
            sessionStorage.setItem('user', '111')
            navigate('/')
        })
    }
    return(
        <>
            <div className='log'>
                <div className='topTitle'>登录</div>
                <div className='topTitle2'>这是一项安全的Goldriven身份验证服务，允许您通过我们的授权账号访问Goldriven服务</div>
                <br></br>
                <Input placeholder="用户名" onChange={(e)=>{setUserName(e.target.value)}}/>
                <br></br>
                <br></br>
                <Input.Password placeholder="密码" onChange={(e)=>{setPassWord(e.target.value)}} />
                <br></br>
                <br/>
                <br/>
                <div className='btnZu'>
                    <Button onClick={login}>登录</Button>&nbsp;&nbsp;
                    <Button onClick={onShow}>注册</Button>
                </div>
            </div>
        </>
    )
}

function Sign({onShow}){
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [passWord2, setPassWord2] = useState('')
    const [api, contextHolder] = notification.useNotification();
    function sign(){
        if(userName == ''){
            console.log('111')
            return
        }
        if(passWord == ''){
            console.log('22')
            return
        }
        if(passWord2 == ''){
            console.log('33')
            return
        }
        if(passWord2 != passWord){
            console.log('44')
            return
        }
        let formData = new FormData();
        formData.append("username", userName)
        formData.append("password", passWord)
        formData.append("repeatPassword", passWord2)
        axios({
            method: 'POST',
            data: formData,
            url: '/user/sign_up'
        }).then(res =>{
            notification.success({
                message: '账号注册成功',
            });
            onShow()
        })
    }
    return(
        <>
            <div className='sign'>
                <div className='topTitle'>注册账户</div>
                <br></br>
                <br></br>
                <Input placeholder="用户名" onChange={(e)=>{setUserName(e.target.value)}}/>
                <br></br>
                <br></br>
                <br></br>
                <Input.Password placeholder="密码" onChange={(e)=>{setPassWord(e.target.value)}}/>
                <br></br>
                <br></br>
                <br></br>
                <Input.Password placeholder="再次输入密码" onChange={(e)=>{setPassWord2(e.target.value)}}/>
                <br></br>
                <br/>
                <br/>
                <div className='btnZu'>
                    <Button onClick={sign}>注册</Button>&nbsp;&nbsp;
                    <Button onClick={onShow}>登录</Button>
                </div>
            </div>
        </>
    )
}

export default Login