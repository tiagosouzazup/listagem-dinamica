import React from 'react';

const Button = (props) => {
    return (
        <button onSubmit={props.onSubmit} className="Adicionar">Salvar</button>
    )
};

export default Button;