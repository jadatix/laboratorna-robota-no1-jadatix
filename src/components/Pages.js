import React from "react";
import "../styles.css";

const Pages = (props) => {

    const values = props.nums.length <= 12 ? props.nums.map((el, idx) => <div className="page-el" key={idx}>
        <p >{el}</p>
    </div>) : <div />

    return <div className="page-div-">
        <div className="pages" style={{ width: `calc(40%/12*${props.nums.length})` }}>
            {values}
        </div>
    </div>
}

export default Pages;


