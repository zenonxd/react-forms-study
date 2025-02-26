
import './App.css'
import React, {useState} from "react";
import Input from './Input.jsx';
import useForm from './hooks/useForm.jsx'


function App() {

    const cep = useForm('cep');
    const email = useForm('email');

    function handleSubmit(event) {
        event.preventDefault();
        if (cep.validate()) {
            console.log('CEP válido');
        } else {
            console.log('CEP inválido');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="CEP"
                id="CEP"
                type="text"
                placeholder="00000-000"
                {...cep}
            />

            <Input
                label="Email"
                id="email"
                type="email"
                placeholder="seu-email@example.com"
                {...email}
            />
            <button>Enviar</button>
        </form>
    );
}

export default App
