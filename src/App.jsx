
import './App.css'
import {useState} from "react";

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];


function App() {
  const [cores, setCores] = useState([]); //criamos Array pura e vazia

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  //target desestruturado
  function handleCheckboxChange({target}) {
    //se o checkbox estiver marcado, pega a lista que ja existe e o coloca
    //o que foi selecionado
    if (target.checked) {
      setCores([...cores, target.value]);
    }
    //se não foi checked, faz um filtro para retornar uma array sem o
    //elemento q n foi marcado (ou desmarcado)
    else {
      setCores(cores.filter((cor) => cor !== target.value));
    }

  }

  return (
      <>
        <form>
          {coresArray.map((cor) => (
              <label key={cor}>
                <input
                    type="checkbox"
                    value={cor}
                    checked={handleChecked(cor)}
                    onChange={handleCheckboxChange}
                />
                {cor}
              </label>
          ))}
        </form>
        <div>
          <h2>Cores Selecionadas</h2>
          <ul>
            {cores.map((cor) => (
              <li key={cor}>{cor}</li>
            ))}
          </ul>
        </div>
      </>

  )
}

export default App
