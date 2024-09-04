import { React, useState } from "react"
import './styled.css'

export const Fila = () => {

    const [string, setString] = useState('');
    const [index, setIndex] = useState(null);
    const [lista, setLista] = useState([]);

    const handleClick = () => {
        let lista2 = [...lista];
        lista2[index] = string;

        for(let i = 0; i < lista2.length; i++) {

            if(!lista2[i]) {
                lista2[i] = 'vazio'
            }
        }
        setLista(lista2)
    }

    return (
        <div className="container">
        <h1>LISTA</h1>
        <input value = {string} onChange = { (e) => setString(e.target.value) } type="text" />
        <input value = {index} onChange = { (e) => setIndex(e.target.value) } type="number" />
        <button onClick={handleClick}>butao</button>
        <h2 className="list">{lista.join(', ')}</h2>
        </div>
    )
}