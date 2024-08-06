import { useState } from "react";
import "./App.css";

const App = () => {
  const [cityInput, setCityInput] = useState("");

  const [title, setTitle] = useState("the full name will appear here");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(`your name is ${formData.firstName} ${formData.lastName}`);
    setFormData({
      firstName: '',
      lastName: ''
    })
  };
  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const updateFormData = { ...formData, [key]: value };
    setFormData(updateFormData);
  };

  return (
    <>
      <h2>{title}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name : </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <button type="submit">Submit your name</button>
      </form>
    </>
  );
};

export default App;
