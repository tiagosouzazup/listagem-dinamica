import React, { useState } from 'react';

import Button from '../Button';

const NovaTarefa = ({ onSubmit }) => {

    const [novoNome, setNovoNome] = useState('');

    const [novoSobrenome, setNovoSobrenome] = useState('');

    function setNovaLastname({ target }) {
        setNovoSobrenome( target.value)
    }
    
    function setNovaTarefa({ target }) {
        setNovoNome(target.value);

    }
    function submit(e) {
        e.preventDefault();
        onSubmit(novoNome + " " + novoSobrenome);
    }
    return (
        <div>
            
                <input
                    placeholder="Digite um nome"
                    onChange={setNovaTarefa}
                />
                 <input
                    placeholder="Digite um sobrenome"
                    onChange={setNovaLastname}
                />
                <Button onClick={submit}
                />

                {/* <button type="submit">
                    Adicionar
                </button> */}
            
        </div>
    )
};
export default NovaTarefa;