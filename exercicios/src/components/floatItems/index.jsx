import React, { useState } from 'react';

const Sidebar = () => {
  const components = ['Component 1', 'Component 2']; // Componentes de exemplo

  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '10px' }}>
      {components.map((component, index) => (
        <div 
          key={index} 
          draggable 
          onDragStart={(e) => e.dataTransfer.setData('component', component)} 
          style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', cursor: 'grab' }}>
          {component}
        </div>
      ))}
    </div>
  );
};

const DrawingArea = () => {
  const [droppedComponents, setDroppedComponents] = useState([]);
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [lines, setLines] = useState([]);

  const handleDrop = (e) => {
    const component = e.dataTransfer.getData('component');
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    setDroppedComponents([...droppedComponents, { component, x, y, id: droppedComponents.length }]);
  };

  const handleComponentClick = (comp) => {
    if (selectedComponents.length === 1) {
      // Se já houver um componente selecionado, conectar com o segundo
      const line = { start: selectedComponents[0], end: comp };

      // Verificar se a nova linha se cruza com as existentes
      if (!checkLineIntersections(line)) {
        setLines([...lines, line]);
      }

      setSelectedComponents([]); // Reinicia a seleção
    } else {
      // Seleciona o primeiro componente
      setSelectedComponents([comp]);
    }
  };

  // Função que verifica se as linhas se cruzam
  const checkLineIntersections = (newLine) => {
    const { start: A, end: B } = newLine;
    return lines.some(({ start: C, end: D }) => doLinesIntersect(A, B, C, D));
  };

  // Verificar se duas linhas se cruzam
  const doLinesIntersect = (A, B, C, D) => {
    const crossProduct = (P, Q, R) => (Q.x - P.x) * (R.y - P.y) - (Q.y - P.y) * (R.x - P.x);

    const d1 = crossProduct(A, B, C);
    const d2 = crossProduct(A, B, D);
    const d3 = crossProduct(C, D, A);
    const d4 = crossProduct(C, D, B);

    if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
      return true; // As linhas se cruzam
    }
    return false;
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{ width: '80vw', height: '80vh', border: '1px solid black', position: 'relative' }}
    >
      {/* Renderiza os componentes soltos */}
      {droppedComponents.map((comp, index) => (
        <div
          key={index}
          onClick={() => handleComponentClick(comp)}
          style={{
            position: 'absolute',
            left: comp.x,
            top: comp.y,
            backgroundColor: selectedComponents.includes(comp) ? 'lightblue' : 'lightgray',
            padding: '10px',
            border: '1px solid gray',
            cursor: 'pointer'
          }}
        >
          {comp.component}
        </div>
      ))}

      {/* Renderiza as linhas */}
      {lines.map((line, index) => (
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
            x1={line.start.x}
            y1={line.start.y}
            x2={line.end.x}
            y2={line.end.y}
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      ))}
    </div>
  );
};

const floatItems = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <DrawingArea />
    </div>
  );
};

export default floatItems;
