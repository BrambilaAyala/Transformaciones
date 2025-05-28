import React, { useState } from 'react';

const App = () => {
  const matricesBase = {
    traslacion: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ],
    escalamiento: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ],
    rotacion: [
      [Math.cos(0), -Math.sin(0), 0],
      [Math.sin(0),  Math.cos(0), 0],
      [0, 0, 1]
    ],
    shear: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]
  };

  const camposEditables = {
    traslacion: [[0, 2], [1, 2]],
    escalamiento: [[0, 0], [1, 1]],
    rotacion: [], // Se actualiza con el ángulo
    shear: [[0, 1], [1, 0]]
  };
  const toFixedOrZero = (num, precision = 6) => {
  return Math.abs(num) < 1e-10 ? 0 : parseFloat(num.toFixed(precision));
};


  const [transformacion, setTransformacion] = useState('traslacion');
  const [matrix, setMatrix] = useState(matricesBase['traslacion']);
  const [angulo, setAngulo] = useState(0);

  const handleTipoTransformacion = (tipo) => {
    setTransformacion(tipo);
    setMatrix(matricesBase[tipo]);
    if (tipo === 'rotacion') {
      setAngulo(0);
    }
  };

  const handleChange = (i, j, value) => {
    const nuevaMatrix = [...matrix];
    nuevaMatrix[i][j] = parseFloat(value);
    setMatrix(nuevaMatrix);
  };

  return (
    <div>
      <h2>Transformación: {transformacion}</h2>

      <select onChange={(e) => handleTipoTransformacion(e.target.value)} value={transformacion}>
        <option value="traslacion">Traslación</option>
        <option value="escalamiento">Escalamiento</option>
        <option value="rotacion">Rotación</option>
        <option value="shear">Shear</option>
      </select>

      <table>
        <tbody>
          {matrix.map((fila, i) => (
            <tr key={i}>
              {fila.map((valor, j) => (
                <td key={j}>
                  <input
                    type="number"
                    value={isNaN(valor) ? '' : valor}
                    disabled={!camposEditables[transformacion].some(([i2, j2]) => i2 === i && j2 === j)}
                    onChange={(e) => handleChange(i, j, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {transformacion === "rotacion" && (
        <div>
          <label>Ángulo (grados): </label>
          <input
            type="number"
            value={angulo}
            onChange={(e) => {
              const grados = parseFloat(e.target.value);
              const radianes = grados * Math.PI / 180;
              setAngulo(grados);
              setMatrix([
              [toFixedOrZero(Math.cos(radianes)), toFixedOrZero(-Math.sin(radianes)), 0],
              [toFixedOrZero(Math.sin(radianes)), toFixedOrZero(Math.cos(radianes)), 0],//forzar a zeo el coseno
              [0, 0, 1]
            ]);

            }}
          />
        </div>
      )}
    </div>
  );
};

export default App;


