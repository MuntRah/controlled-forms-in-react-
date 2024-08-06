const [cityInput, setCityInput] = useState("");
const handleChange = (event) => {
  setCityInput(event.target.value);
};
<div>
  
<label htmlFor="cityInput">City: </label>
<input type="text" name="cityInput" value={cityInput} onChange={handleChange}/>
</div>