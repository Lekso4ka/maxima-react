import { createContext, useState } from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Page from "./pages/Page"
import News from "./pages/News"
import Menu from "./components/Menu"
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Boots from "./pages/Boots";
import Libs from "./pages/Libs";

export const Ctx = createContext({});


export default () => {
    const [pokemons, setPokemons] = useState([])
    return <Ctx.Provider value={{
        pokemons,
        setPokemons
    }}>
        <Layout>
            <Menu/>
        </Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/page/:name" element={<Page/>}/>
            <Route path="/b" element={<Boots/>}/>
            <Route path="/l" element={<Libs/>}/>
        </Routes>
    </Ctx.Provider>
}