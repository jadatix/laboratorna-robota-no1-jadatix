import React from "react"
import { useState } from 'react';
import "../styles.css";




const Main = () => {
    const [click, setClick] = useState(0)
    const handleClick = () => {
        setClick(prev => {
            return prev + 1
        })
        console.log(`Клікнуто відправити разів: ${click}`)
    }

    return <div className="form-div">
        <form action="">
            <div className="first-col">
                <div className="search">
                    <input type="text" placeholder="Пошук" />
                    <img src="http://cdn.onlinewebfonts.com/svg/img_372581.svg" alt="?"/>
                </div>
                <div className="smth">
                    <div className="row">
                        <div>
                            <p>
                                Ім'я:
                            </p>
                        </div>
                        <input type="text" placeholder="Ім'я" />
                    </div>
                    <div className="row">
                        <div>
                            <p>
                                Email:
                            </p>
                        </div>
                        <input type="text" placeholder="Прізвище" />
                    </div>
                    <button className="btn" onClick={handleClick} type="button">
                        <p>Відправити</p>
                    </button>
                </div>

            </div>
        </form>
        <div className="second-col">
            <select id="1">
                <option value="2">Перший пункт</option>
            </select>
        </div>
    </div>

}

export default Main;

