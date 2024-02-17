import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import images from "../../assets/images";

import {
    NewsWrapperSt
} from "./style.js";


export default ({}) => {
    const [news, setNews] = useState([]);

    // useEffect(() => {
    //     const data = Object.entries(images)
    //         .slice(2)
    //         .map((item) => ({
    //             pic: item[1],
    //             text: item[0],
    //         }))
    //     console.log(data);
    //     setNews(data);
    // }, [])

    useEffect(() => {
        let currentNesws = localStorage.getItem("space-news");
        // console.log(currentNesws);
        if (currentNesws) {
            currentNesws = JSON.parse(currentNesws);
            // console.log("current", currentNesws);
            setNews(currentNesws.map(item => ({
                pic: item.urlToImage,
                name: item.title,
                text: item.description
            })))
        } else {
        // https://newsapi.org/
            fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_KEY}&q=космос&sources=lenta`)
                .then(res => res.json())
                .then(data => {
                    if (data.totalResults) {
                        localStorage.setItem("space-news", JSON.stringify(data.articles));
                    }
                    console.log(data);
                    setNews(data.articles.map(item => ({
                        pic: item.urlToImage,
                        name: item.title,
                        text: item.description
                    })))
                })
        }
    }, []);

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