import { getRGB, randNumber, getArray } from "./utils/functions"

const icons = [
    "car",
    "rocket",
    "train",
    "bicycle",
    "truck",
    "subway",
    "plane",
    "ship"
];

const Card = () => {
    const color = getRGB();
    const icon = icons[randNumber(icons.length)]
    const st = {
        backgroundColor: color,
        boxShadow: `0 0 5px #0008, 0 0 5px 2px ${color}`
    }
    return <div className="weather-card" style={st}>
        <i className={`fa fa-${icon}`} />
        <hr />
        <h3>{randNumber(20, -20)}˚C</h3>
    </div>
}

const App = () => {
    // let n = 15;
    // const arr = [];
    // while(n--) {
    //     arr.push(randNumber(5, 1));
    // }
    // console.log(arr);

    // const newArr = [];

    // for (let i = 0; i < arr.length; i++) {
    //     newArr.push(<span key={i}>{arr[i]}</span>)
    // }

    const arr = getArray(20);

    return <div className="weather-grid">
       {/* {arr.map((item, index) => <span key={index}>{item}</span>)} */}
       {/* {newArr} */}

       {arr.map((item ,index) => <Card key={index}/>)}
    </div>
}

export default App;