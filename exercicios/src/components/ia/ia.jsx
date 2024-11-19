import { useEffect, useState } from "react";

export const Ia = () => {
  const [matriz, setMatriz] = useState([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ]);

  const [color, setColor] = useState([
    ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
  ])

  useEffect(() => {
    const newColor = [...color]
    matriz.map((row, rowI) => {
      row.map((cel, colI) => {
        newColor[rowI][colI] = cel == 1 ? 'white' : 'black'
      })
      setColor(newColor)
    })

  }, [matriz])

  const handleClick = (rowIndex, colIndex) => {
    const newMatriz = [...matriz];
    newMatriz[rowIndex][colIndex] = newMatriz[rowIndex][colIndex] * -1
    setMatriz(newMatriz);
  };


  // Estilo para as células da tabela
  const cellStyle = {
    padding: 0,
    margin: 0,
  };

  // Estilo para os botões


  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        {matriz.map((linha, rowIndex) => (
          <tr key={rowIndex}>
            {linha.map((celula, colIndex) => (
              <button
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: color[rowIndex][colIndex], // A cor muda com base no estado da matriz
                  border: '1px solid black',
                  cursor: 'pointer',
                }}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                <td key={colIndex} style={cellStyle}>

                </td>
              </button>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};








