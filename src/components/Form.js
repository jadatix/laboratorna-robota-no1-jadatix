import '../form.css'
import React from "react"
import { useState } from 'react'




const Form = () => {
    const [date, setDate] = useState(Date.now().toString())
    const [troops, setTroops] = useState()
    const [tanks, setTanks] = useState()
    const [art, setArt] = useState()
    const [other, setOther] = useState("none")

    const HandleSubmit = () => {
        const data = { date, troops, tanks, art, other }
        console.log("submit: ",data);
    }

    return <>
        <div className='form-box'>
            <form>
                <label>Дата</label>
                <input type='date' value={date} required onChange={e => setDate(e.target.value)} ></input>
                <label>Особового складу</label>
                <input type='number' value={troops} required onChange={e => setTroops(e.target.value)}></input>
                <label>Танків</label>
                <input type='number' value={tanks} required onChange={e => setTanks(e.target.value)}></input>
                <label>Артилерій</label>
                <input type='number' value={art} required onChange={e => setArt(e.target.value)}></input>
                <label>Посилання</label>
                <input value={other} onChange={e => setOther(e.target.value)}></input>
                <button type='button' onClick={ HandleSubmit } >Надіслати</button>
            </form>
        </div>
    </>
}



export default Form