import { React, useState } from "react"
import '../style/styledGlobal.css'

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

    const handleSort = () => {
        
    }

    const handleDelete = () => {
        const listDelete = [...lista]
        listDelete.shift();
        setLista(listDelete);
    }

    return (
        <div className="container">
        <h1>Fila</h1>
        <input value = {string} onChange = { (e) => setString(e.target.value) } type="text" />
        <input value = {index} onChange = { (e) => setIndex(e.target.value) } type="number" />
        <button onClick={handleClick}>Adicionar</button>
        <button onClick={handleSort}>Ordenar</button>
        <button onClick={handleDelete}>Excluir</button>
        <h2 className="list">{lista.join(', ')}</h2>
        </div>
    )
}