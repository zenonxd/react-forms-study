
import './App.css'
import {useState} from "react";

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  function handleChange({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      fetch('https://ranekapi.origamid.dev/json/api/usuario'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }
    } catch (error) {
      console.error('Ocorreu um erro:', error);
    }
    alert('Formulário enviado com sucesso!');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
        />

        <label htmlFor="senha">Senha</label>
        <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
        />

        <label htmlFor="cep">Cep</label>
        <input
            type="number"
            id="cep"
            name="cep"
            placeholder="Cep"
            value={form.cep}
            onChange={handleChange}
        />

        <label htmlFor="rua">Rua</label>
        <input
            type="text"
            id="rua"
            name="rua"
            placeholder="Rua"
            value={form.rua}
            onChange={handleChange}
        />

        <label htmlFor="numero">Número</label>
        <input
            type="text"
            id="numero"
            name="numero"
            placeholder="Número"
            value={form.numero}
            onChange={handleChange}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="Bairro"
            value={form.bairro}
            onChange={handleChange}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Cidade"
            value={form.cidade}
            onChange={handleChange}
        />

        <label htmlFor="estado">Estado</label>
        <input
            type="text"
            id="estado"
            name="estado"
            placeholder="Estado"
            value={form.estado}
            onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default App
