import React from 'react'
import {lazy} from 'react'
import {Navigate} from 'react-router-dom'
import Home from "@/view/Home"
// import About from "@/view/About"
// const About=lazy(()=> {import("@/view/About")})
const About = lazy(() => import("@/view/About")); //需和React.Suspense配套使用

const withLoadingComponent=(comp:JSX.Element)=> {
    return <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
}

const routes=[
    {
        path:"/",
        element: <Navigate to='/home'/>
    },
    {
        path:"/home",
        element: <Home/>
    },
    {
        path:"/about",
        element: withLoadingComponent(<About/>)
    },
]
export default routes;