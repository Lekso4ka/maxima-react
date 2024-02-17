import {
    NewsCardSt,
    NewsImg,
    CardContentSt
} from "./style";

export default ({
    pic,
    name,
    text
}) => {
    return <NewsCardSt>
        {/* <img src={pic}/> */}
        <NewsImg pic={pic} format={pic.split(".").pop()}/>
        <CardContentSt>
            <h3>{name}</h3>
            <p>{text}</p>
        </CardContentSt>
    </NewsCardSt>
}