import './Header.less'
import { useTranslation } from 'react-i18next';
import { useNavigate  } from "react-router-dom";
// import axios from '../../api/request'
import useRequest from '../../api/request2';

function MyHeader({data}){
    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const [axios] = useRequest()
    function logout(){
        axios({method: 'POST', url: "/user/logout"}).then(res=>{
            navigate('/login')
        })
    }
    return(
        <header style={{background: data.background}}>
            <div>
                <img src="/src/assets/Logo.svg"/>
            </div>
            <div style={{color: data.color}}>
                <span onClick={() => {
                    i18n.changeLanguage('zh-CN')
                }}> 简  |</span>
                <span onClick={() => {
                    i18n.changeLanguage('zh-TW')
                }}> 繁  |</span>
                <span onClick={() => {
                    i18n.changeLanguage('en-US')
                }} style={{marginRight: '20px'}}> En </span>
                {data.isTrue? <span onClick={logout} style={{marginRight: '20px'}}>{t('header.LogOut')}</span>: '' }
            </div>
        </header>
    )
}

export default MyHeader;