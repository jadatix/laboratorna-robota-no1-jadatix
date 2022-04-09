import React from "react"
import { Link } from "react-router-dom"
import "../styles.css"

const Menu = ({title}) => {
    return <>
            <div className="nav-bar" style={{ width: `calc(10%*${title.length})` }}>
                {
                    title.map((el, idx) => 
                        <Link to={el.link} className="element" key={idx} style={{ width: `calc(100%/${title.length})` }} >
                            {/* <div className="element" key={idx} style={{ width: `calc(100%/${title.length})` }}> */}
                                <p>{el.text}</p>
                            {/* </div> */} {/*idc bad calc with div inside <Link>... */}
                        </Link>
                    )
                }
            </div>
    </>
}

export default Menu