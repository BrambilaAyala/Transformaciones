import React, { useState } from 'react';
import axios from 'axios';

export default function TransformacionForm() {
    const [tipo, setTipo] = useState("traslacion");
    const [inputs, setInputs] = useState({});
    const [resultado, setResultado] = useState(null);

    const camposPorTipo = {
        traslacion: ["x", "y", "dx", "dy"],
        rotacion: ["x", "y", "angulo"],
        escalamiento: ["x", "y", "sx", "sy"],
        shear: ["x", "y", "shx", "shy"]
    };

    const handleChange = e => {
        setInputs({ ...inputs, [e.target.name]: parseFloat(e.target.value) });
    };

    const enviar = async () => {
        const res = await axios.post(`http://localhost:3001/api/${tipo}`, inputs);
        setResultado(res.data.resultado);
    };

    return (
        <div>
            <h2>Transformaciones</h2>
            <select value={tipo} onChange={e => { setTipo(e.target.value); setInputs({}); }}>
                <option value="traslacion">Traslación</option>
                <option value="rotacion">Rotación</option>
                <option value="escalamiento">Escalamiento</option>
                <option value="shear">Shear</option>
            </select>
            {camposPorTipo[tipo].map(campo => (
                <input
                    key={campo}
                    name={campo}
                    placeholder={campo}
                    type="number"
                    onChange={handleChange}
                />
            ))}
            <button onClick={enviar}>Transformar</button>
            {resultado && <p>Resultado: {resultado}</p>}
        </div>
    );
}
