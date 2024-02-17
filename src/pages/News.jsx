import { useState } from "react";
import styled from "@emotion/styled";
import NewsBlock from "../components/NewsBlock";
import {getRGB} from "../utils/functions";

import {Feed} from "@mui/icons-material";
import {Button} from "@mui/material"



const NewsLayoutStyle = styled.div`
    min-height: 400px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
    background-color: ${({c}) => c};
    // &:hover {
    //     background-color: silver;
    // }
    h1 {
        color: #222;
        user-select: none;
    }
    @media (min-width: 1200px) {
        h1 {
            text-shadow: 1px 2px 5px deepskyblue;
        }
    }
`


export default ({}) => {
    const [color, setColor] = useState("#fff");

    const clickHandler = (e) => {
        setColor(getRGB(.2));
    }
    return <NewsLayoutStyle 
        onClick={clickHandler}
        c={color}
    >
        {/* <h1>{process.env.REACT_APP_NAME}</h1> */}
        <h1>Новости Лента</h1>
        <Button
            variant="contained"
            onClick={() => {
                localStorage.removeItem("space-news");
                window.location.reload();
            }}
        >
            <Feed/>
        </Button>
        <NewsBlock/>
    </NewsLayoutStyle>
}