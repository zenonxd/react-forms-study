
import './App.css'
import {useState} from "react";

function App() {
  const [radio, setRadio] = useState('');

  function handleChange({target}) {
    setRadio(target.value);
  }

  return (
      <form>
        <label>
          <input
              type="radio"
              value="notebook"
              checked={radio === 'notebook'} //retorna true ou false
              onChange={handleChange}
          />
          Notebook
        </label>

        <label>
          <input
              type="radio"
              value="smartphone"
              checked={radio === 'smartphone'} //retorna true ou false
              onChange={handleChange}
          />
          Smartphone
        </label>
      </form>
  )
}

export default App
