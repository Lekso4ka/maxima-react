import { getArray } from "./utils/functions"

import TestCard from "./components/TestCard/TestCard.jsx";
import TextBlock from "./components/TextBlock/TextBlock";
import textContent from "./assets/data/text.json";

const App = () => {

    return <>
        <header></header>
        <section className="banner">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod.</h1>
        </section>
        <section className="second">
            <h2>Точно подойдет для:</h2>
            <div className="second__content">
                {textContent
                    .filter(item => item.block === "second")
                    .map((item, i) => <TextBlock key={i} name={item.title} text={item.content} color="blueviolet"/>)
                }
            </div>
        </section>
        <section>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cumque.</h2>
        </section>
        <section className="bottom">
            <h2>Точно подойдет для:</h2>
            <div className="bottom__content">
                {textContent
                    .filter(item => item.block === "bottom")
                    .map((item, i) => <TextBlock 
                        key={i}
                        name={item.title} 
                        text={item.content}
                        variant="colorize"
                        // color="#89ffad"
                    />)
                }
            </div>
        </section>
    </>
}

export default App;