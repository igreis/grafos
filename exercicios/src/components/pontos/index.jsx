import React, { useState } from 'react';

const ClickableScreen = () => {
  const [points, setPoints] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    // Calcula a posição relativa do clique dentro da div
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Adiciona a posição do clique ao array de pontos
    setPoints([...points, { x, y, rightClick: e.type === 'contextmenu' }]);
  };

  return (
    <div
      style={{
        width: '600px', // Define uma largura fixa
        height: '400px', // Define uma altura fixa
        backgroundColor: 'white',
        position: 'relative',
        border: '1px solid black',
      }}
      onClick={handleClick}
      onContextMenu={handleClick}
    >
      {/* Renderiza as linhas */}
      {points.map((point, index) => {
        if (index > 0 && points[index].rightClick) {
          const previousPoint = points[index - 1];
          return (
            <svg
              key={`line-${index}`}
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <line
                x1={previousPoint.x}
                y1={previousPoint.y}
                x2={point.x}
                y2={point.y}
                stroke="gray"
                strokeWidth="2"
              />
            </svg>
          );
        }
        return null;
      })}

      {/* Renderiza as bolinhas */}
      {points.map((point, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: 'black',
            borderRadius: '50%',
            left: point.x - 5,
            top: point.y - 5,
          }}
        />
      ))}
    </div>
  );
};

export default ClickableScreen;
