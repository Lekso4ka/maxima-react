import TextBlock from "./components/TextBlock/TextBlock";
import textContent from "./assets/data/text.json";
import Layout from "./components/Layout";

const App = () => {

    return <>
        <header></header>
        <section className="banner">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod.</h1>
        </section>
        <Layout 
            name="Точно подойдет для:"
            count={2}
        >
            {textContent
                .filter(item => item.block === "second")
                .map((item, i) => <TextBlock key={i} name={item.title} text={item.content} color="blueviolet"/>)
            }
        </Layout>
        
        <Layout/>
        <Layout 
            name="Точно подойдет для:"
            size="300px"
        >
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
        </Layout>
    </>
}

export default App;