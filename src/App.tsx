import './App.css'
import {useRoutes} from "react-router-dom"
import routers from './routers/index'
import {RouterBeforeEach} from './routers/beforeEnter'

function App() {
  const element = useRoutes(routers)
  return (
    <>
      <RouterBeforeEach >{element}</RouterBeforeEach>
    </>
  )
}

export default App
