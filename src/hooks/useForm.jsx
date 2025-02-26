import React from 'react';
import {useState} from "react";

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'Cep inválido',
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email inválido',
    },
};

const useForm = (type) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function validate(value) {

        //para caso a gente queira um campo que não
        //é necessario preencher, ele não cairá no if abaixo ⬇️
        if (type === false) return true;

        if (value.length === 0) {
            setError('Preencha um valor');
            return false;

            //esse primeiro else-if verifica se existe o type
            //pois pode ser um campo que n iremos verificar
        } else if (types[type] && !types[type].regex.test(value)) {
            //acessando a mensagem de erro do objeto que fora passado
            //como parâmetro
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        //se existir algum erro, realização a validação, se cair no true
        //continua pro setValue abaixo
        if (error) validate(target.value);

        setValue(target.value);
    }

    return {
        value,
        setValue,
        error,
        onChange,
        //assim que saímos do campo, ele irá usar a função da validação
        onBlur: () => validate(value),
        validate: () => validate(value),
    };
}

export default useForm;