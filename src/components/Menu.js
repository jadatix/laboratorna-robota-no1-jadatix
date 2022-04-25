import React from "react"
import { Link } from "react-router-dom"
import "../styles.css"

const Menu = ({title}) => {
    return <>
            <div className="nav-bar" style={{ width: `calc(10%*${title.length})` }}>
                {
                    title.map((el, idx) => 
                        <Link to={el.link} className="element" key={idx} style={{ width: `calc(100%/${title.length})` }} >
                                <p>{el.text}</p>
                        </Link>
                    )
                }
            </div>
    </>
}

export default Menu