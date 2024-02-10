import {useState} from "react";

const products = [
    {name: "Огурцы", price: 120},
    {name: "Томаты", price: 190},
    {name: "Капуста", price: 80},
    {name: "Редис", price: 200},
]

export default () => {
    const [activeLine, setActiveLine] = useState(false);
    const [newPro, setNewPro] = useState("");
    const [newPrice, setNewPrice] = useState(null);

    const addHandler = () => {
        setActiveLine(true);
    }

    const addDoneHandler = () => {
        setActiveLine(false);
        setNewPro("");
        setNewPrice(null);
    }
    const addCancelHandler = () => {
        setActiveLine(false);
        setNewPro("");
        setNewPrice(null);
    }


    return <>
        <h1>Продукты</h1>
        <table>
            <thead>
                <tr>
                    <th>Продукт</th>
                    <th>Цена / кг</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((pro, i) => <tr key={i}>
                    <td>{pro.name}</td>
                    <td>{pro.price}</td>
                    <td>
                        <button>Купить</button>
                    </td>
                </tr>)}
                {activeLine && <tr>
                    <td>
                        <input 
                            type="text" 
                            placeholder="Продукт"
                            value={newPro}
                            onChange={(e) => setNewPro(e.target.value)}
                        />    
                    </td>    
                    <td>
                        <input 
                            type="text" 
                            placeholder="Цена"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                        />   
                    </td>    
                    <td className="btns">
                        <button onClick={addDoneHandler}>
                            <i className="fa fa-check"/>
                        </button>
                        <button onClick={addCancelHandler}>
                            <i className="fa fa-window-close"/>
                        </button>
                    </td>    
                </tr>}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}>
                        <button onClick={addHandler}>
                            <i className="fa fa-plus"/>
                        </button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </>
}