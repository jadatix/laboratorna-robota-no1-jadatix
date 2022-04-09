import React from "react"
import "../styles.css"


const Title = (props) => {
    return <div className="title">
        <h1>{props.name}</h1>
    </div>
}
export default Title