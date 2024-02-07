import { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout";
import {useParams, useNavigate} from "react-router-dom";
import images from "../assets/images";
import { Ctx } from "../App";



export default () => {
    const [current, setCurrent] = useState();
    const {name} = useParams();
    const {pokemons} = useContext(Ctx);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(pokemons);
        const cur = pokemons.filter(pk => pk.text === name)[0]
        console.log(cur);
        if (cur) {
            setCurrent(cur);
        }
    }, [pokemons])
    useEffect(() => {
        setTimeout(() => {
            navigate("/catalog");
        }, 2000)
    })
    
    return <Layout name={name}>
        <img src={images[`pic${current?.n+2 || 1}`]} alt={name}/>
    </Layout>
}