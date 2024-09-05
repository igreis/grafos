import { React, useState } from "react"
import '../style/styledGlobal.css'
import './styled.css'

export const Pilha = () => {

    const [string, setString] = useState('');
    const [index, setIndex] = useState(null);
    const [pilha, setPilha] = useState([]);

    const handleClick = () => {
        let pilha2 = [...pilha];
        pilha2[index] = string;

        for (let i = 0; i < pilha2.length; i++) {

            if (!pilha2[i]) {
                pilha2[i] = 'vazio'
            }
        }
        setPilha(pilha2)
    }

    const handleSort = () => {
        
    }

    const handleDelete = () => {
        const pilhaDelete = [...pilha]
        pilhaDelete.shift();
        setPilha(pilhaDelete);
    }

    return (
        <div className="main">
            <div className="container">
                <h1>Pilha</h1>
                <input value={string} onChange={(e) => setString(e.target.value)} type="text" />
                <input value={index} onChange={(e) => setIndex(e.target.value)} type="number" />
                <button onClick={handleClick}>Adicionar</button>
                <button onClick={handleSort}>Ordenar</button>
                <button onClick={handleDelete}>Excluir</button>
            </div>
            <div className="exibir">
                <h2 className="list">
                    {pilha.map((item, index) => (
                        <div className = "item" key={index}>{item}</div>
                    ))}
                </h2>
            </div>
        </div>
    )
}