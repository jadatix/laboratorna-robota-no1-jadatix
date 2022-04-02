import React from "react";
import { useState, useEffect } from "react";
import "../list.css"


const FeedbackItem = (props) => {
    return <div className="element-box">
        
    </div>
}


const Feedback = (props) => {
    
    return <div className="bg-box" >
        {props.d.map((el, idx) => <div key={idx}><FeedbackItem data={el} /></div>)}
    </div>

}