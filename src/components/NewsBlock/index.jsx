import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import images from "../../assets/images";

import {
    NewsWrapperSt
} from "./style.js";


export default ({}) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const data = Object.entries(images)
            .slice(2)
            .map((item) => ({
                pic: item[1],
                text: item[0],
            }))
        console.log(data);
        setNews(data);
    }, [])
    return <NewsWrapperSt>
        {/* {news.map((n, i) => <NewsCard key={i} {...n}/>)} */}
        {news.length > 0 && news.map((n, i) => <NewsCard 
            key={i}
            pic={n.pic}
            name={n.text}
            text={n.text}
        />)}
    </NewsWrapperSt>
}