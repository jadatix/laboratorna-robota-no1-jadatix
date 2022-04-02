import Menu from "./Menu";
import Title from "./Title"
import Pages from "./Pages"
import Main from "./Main"
import List from "./List"
import Form from "./Form"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import { useState, useEffect } from 'react'


const App = () => {
    const [arr, setArr] = useState([])
    useEffect(() => fetch("/data.json").then(response => response.json())
        .then(data => { console.log(data); setArr(data) }),[])
    
    
    return <>
        <Router>
            <Routes>
                <Route path="/" element={<>
                    <Title name="Набір ГТМЛ і ЦСС елементів"/>
                    <Menu title={["Головна", "Уроки", "Пензлі", "Фоточки", "Про проєкт", "GIMP"]} />
                    <Main />
                    <Pages nums={["Сюди", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Туди"]}/>
                </>
                }/>
                <Route path="/test" element={<List d={arr} />} />
                <Route path="/form" element={ <Form/>}/>
            </Routes>
        </Router>
    </>    
    
    
}
export default App;