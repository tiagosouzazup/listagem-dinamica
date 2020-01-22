import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="Adicionar">Salvar</button>
    )
};

export default Button;