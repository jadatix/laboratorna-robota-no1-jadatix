import react from "react"
import '../list.css'
import React from "react"
const ListItem = (props) => {
    
    return <>
        <div className="element-box">
            <p><b>{props.data.date}</b></p>
            <p><b>Особовий склад</b>: {props.data.troops}</p>
            <p><b>Танків</b>: {props.data.tanks}</p>
            <p><b>Артилерій</b>: {props.data.art}</p>
            <p><a href={props.data.other}>Детальніше</a></p>
        </div>
    </>
}


const List = (props) => {
    return <>
        <div className="bg-box">
            <h2>Загальні бойові втрати противника</h2>
            {props.d.map((el, idx) => <div key={idx}><ListItem data={el}/></div>)}
        </div>
    </>
}

export default List;
