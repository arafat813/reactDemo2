import { Outlet } from "react-router-dom";
import MyHeader from "./Header/Header";
import MyMenu from "./Menu/menu";
import './mian.less'
function Main(){
    return(
        <>
            <MyHeader data={{
            isTrue: true,
            background: 'linear-gradient(to right, white, #55be9e)',
            color: 'white'
            }}></MyHeader>
            <main>
                <div className="menu">
                    <MyMenu></MyMenu>
                </div>
                <div className="menu2">
                    <Outlet></Outlet>
                    {/* <Index></Index> */}
                </div>
            </main>
        </>
    )
}

export default Main;