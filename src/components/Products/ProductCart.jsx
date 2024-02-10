import {useSelector, useDispatch} from "react-redux";
import { delFromBasket } from "../../store/Basket"; 

export default () => {
    const basket = useSelector(state => state.basket.data)
    const dispatch = useDispatch()
    return <>
        <h2>Корзина</h2>
        <table>
            <thead>
                <tr>
                    <th>Продукт</th>
                    <th>Цена</th>
                    <th>Кол-во</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {basket.map((pro, i) => <tr key={i}>
                    <td>{pro.name}</td>
                    <td>{pro.price}</td>
                    <td>{pro.cnt}</td>
                    <td>
                        <button
                            onClick={() => dispatch(delFromBasket(pro.name))}
                        >Удалить</button>
                    </td>
                </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}>
                        ИТОГО
                    </td>
                    <td>{basket.reduce((s, el) => {
                        s += el.price * el.cnt;
                        return s;
                    }, 0)}</td>
                </tr>
            </tfoot>
        </table>
    </>
}