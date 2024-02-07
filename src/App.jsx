import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Page from "./pages/Page"
import Menu from "./components/Menu"
import Layout from "./components/Layout";

export default () => {
    return <>
            <Layout>
                <Menu/>
            </Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/page" element={<Page/>}/>
            </Routes>
    </>
}