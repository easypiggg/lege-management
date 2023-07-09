// 组件写法
import App from "../App"
import Home from "@/view/Home"
import About from "@/view/About"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Navigate} from 'react-router-dom'

export default function baseRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
