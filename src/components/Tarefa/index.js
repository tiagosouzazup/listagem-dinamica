import React, { useState } from 'react';

const NovaTarefa = ({ onSubmit }) => {

    const [novoNome, setNovoNome] = useState('');

    function setNovaTarefa({ target }) {
        setNovoNome(target.value);
    }
    function submit(e) {
        e.preventDefault();
        onSubmit(novoNome);
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input
                    placeholder="Digite um nome"
                    onChange={setNovaTarefa}
                />
                <input
                    placeholder="digite um sobrenome"
                    onChange={setNovaTarefa}
                />
                <button type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    )
};
export default NovaTarefa;