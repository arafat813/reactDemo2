import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routes from './index'

export const RouterBeforeEach = ({children}: any) => {
    const location = useLocation();
    const navigator =useNavigate()
    useEffect(() => {
      let router = getCurrentRouterMap(routes, location.pathname)
      const user = sessionStorage.getItem('user')
      console.log(user)
      if(user && router.path == '/login'){
        console.log('111')
      }
      if(!user){
        navigator('/login')
      }
    //   navigator(router.path)
    }, [location.pathname]);
    return children
}


const getCurrentRouterMap = (routers: any, path: any,) => {
    for(let router of routers) {
      if(router.path == path) return router;
      if(router.children) {
        const childRouter: any = getCurrentRouterMap(router.children, path)
        if(childRouter.path == path) return childRouter;
      }
    }
    return routes[routes.length -1]
}

