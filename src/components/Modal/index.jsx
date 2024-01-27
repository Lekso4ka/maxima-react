import {useState} from "react";

import "./style.css";

export default ({
    setOpenModal
}) => {

    const [name, setName] = useState("123");
    const [age, setAge] = useState(14);

    

    const closeHandler = () => {
        setOpenModal(false);
    }

    const handler = (e) => {
        const data = {
            name,
            age
        }
        console.log(data);
        closeHandler()
    }

    return <div className="modal-wrapper">
        <div className="modal">
            <div className="modal__close" onClick={closeHandler}>
                <i className="fa fa-times"/>
            </div>
            <div className="modal__content">
                <label>
                    <span>Имя</span>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Возраст</span>
                    <input 
                        type="number" 
                        max={99} 
                        min={14}
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <button onClick={handler}>Отправить</button>
            </div>
        </div>
    </div>
}