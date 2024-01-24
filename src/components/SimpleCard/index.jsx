import TextBlock from "../TextBlock/TextBlock"

export default ({
    pic,
    name,
    text
}) => {

    return <div
        style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start"
        }}
    >
        <img src={pic} alt="" width="100"/>
        <TextBlock name={name} text={text}/>
    </div>
}