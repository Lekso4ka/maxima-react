import { useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import { Ctx } from "../App";

import Layout from "../components/Layout";
import images from "../assets/images";

export default () => {
    const {pokemons, setPokemons} = useContext(Ctx)

    useEffect(() => {
        if (!pokemons.length) {
            fetch(`https://fakerapi.it/api/v1/custom?text=pokemon&n=counter&_quantity=6`)
                .then(res => res.json())
                .then(data => {
                    data.data.sort((a,b) => {
                        return b.text > a.text ? -1 : 1;
                    })
                    setPokemons(data.data);
                });
        }
    }, [])

    const cardSt = {
        padding: "30px",
        display: "grid",
        gap: "20px",
        boxShadow: "0 0 5px 0 #0004"
    }


    return <Layout name="Catalog" count={3}>
        {pokemons.length > 0 && pokemons.map((item, i) => <Link key={i} to={`/page/${item.text}`}>
            <span style={cardSt}>
                <span style={{textAlign: "center"}}>{item.text}</span>
                <img 
                    src={images["pic" + (item.n + 2)]} 
                    alt={item.text} 
                    width="100%"
                />
            </span>
        </Link>)}
    </Layout>
}