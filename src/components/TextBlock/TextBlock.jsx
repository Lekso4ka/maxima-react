import "./style.css";

export default ({
    name = "Caption", 
    text
}) => {
    return <div className="text-block">
        <h3 className="text-block__caption">
            {name}
        </h3>
        <p className="text-block__text">
            {text 
                ? text 
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum dolorem exercitationem maiores consequuntur ad nam blanditiis nobis ratione itaque impedit odio nulla illum voluptatibus!"
            }
            {/* {props.text && "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum dolorem exercitationem maiores consequuntur ad nam blanditiis nobis ratione itaque impedit odio nulla illum voluptatibus!"} */}
        </p>
    </div>
}
