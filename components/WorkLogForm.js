
import { useState } from "react";

export default function WorkLogForm() {
  const [name, setName] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [workType, setWorkType] = useState("Presupuesto nuevo"); // valor inicial

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, workDescription, location, date, workType };
    console.log(data);
    alert("Datos enviados correctamente!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre y Apellido"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Local"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={workDescription}
        onChange={(e) => setWorkDescription(e.target.value)}
      />

      {/* NUEVAS OPCIONES AGREGADAS */}
      <label>Tipo de trabajo:</label>
      <select
        value={workType}
        onChange={(e) => setWorkType(e.target.value)}
      >
        <option>Presupuesto nuevo</option>
        <option>Garantía</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
}
