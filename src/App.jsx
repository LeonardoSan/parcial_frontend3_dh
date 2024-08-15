import React, { useState } from "react";
import "./index.css";
import Card from "./Card";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const { name, description } = formData;

    if (name.trim().length < 3 || name.startsWith(" ")) {
      setErrors("Por favor chequea que la información sea correcta");
      return false;
    }

    if (description.length < 6) {
      setErrors("Por favor chequea que la información sea correcta");
      return false;
    }

    setErrors("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre del color:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          {errors && <p style={{ color: "red" }}>{errors}</p>}
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <Card name={formData.name} description={formData.description} />
      )}
    </div>
  );
}

export default App;