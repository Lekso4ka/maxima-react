const basket = [
    {name: "Огурцы", price: 120, cnt: 3},
    {name: "Капуста", price: 80, cnt: 1},
]
export default () => {
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
                        <button>Удалить</button>
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