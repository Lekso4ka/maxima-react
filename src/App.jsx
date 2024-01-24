import { getArray } from "./utils/functions"

import TestCard from "./components/TestCard/TestCard.jsx";
import TextBlock from "./components/TextBlock/TextBlock";

const App = () => {
   
    // const arr = getArray(20);

    return <>
        <header></header>
        <section className="banner">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod.</h1>
        </section>
        <section className="second">
            <h2>Точно подойдет для:</h2>
            <div className="second__content">
                <TextBlock 
                    name="Caption" 
                    text="Hello my Component!"
                />
                <TextBlock name="=)"/>
            </div>
        </section>
        <section>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cumque.</h2>
        </section>
        <section className="bottom">
            <h2>Точно подойдет для:</h2>
            <div className="bottom__content">
                <TextBlock/>
                <TextBlock name="123"/>
                <TextBlock/>
            </div>
        </section>
    </>
}

export default App;