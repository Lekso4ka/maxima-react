import { createContext, useState } from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Page from "./pages/Page"
import Menu from "./components/Menu"
import Layout from "./components/Layout";
import Products from "./pages/Products";

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
            <Route path="/page/:name" element={<Page/>}/>
        </Routes>
    </Ctx.Provider>
}