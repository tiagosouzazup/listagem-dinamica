import React, { useState, useEffect } from 'react';
import Lista from '../Lista';
import Tarefa from '../Tarefa';


const ListaNomes = () => {
    const [tarefas, setTarefas] = useState([]);
    const [encontrado, setEncontrado] = useState(false)
    const [nome, setNome] = useState("")
    useEffect(
        () => {
            console.log(tarefas, nome)
            const achou = nome && tarefas.find(tarefa => tarefa.value===nome)
            if (achou) {
                setEncontrado(true)
            }
            else {
                setEncontrado(false)
            }
        },
        [tarefas, nome]

    )

    function addNovaTarefa(tarefa) {

        const nomes = Array.from(tarefas);
        nomes.push({ id: tarefas.length, value: tarefa });
        setTarefas(nomes);
    }
    function deleteTarefa(index) {
        const nomes = Array.from(tarefas);
        nomes.splice(index, 1);
        setTarefas(nomes);
    }


    return (
        <div>
            {
               nome && (encontrado ?
                <div>
                   <p> Nome encontrado </p>
                </div>
                : 
                <div>
                   <p> Nome não encontrado </p>
                </div>)
            }
            
            <input className="Pesquisar" value={nome} onChange={evento => setNome(evento.target.value)} />
            <Tarefa onSubmit={addNovaTarefa} />
            {tarefas.map(({ id, value },index) => (<Lista
                key={id}
                value={value}
                onDelete={() => deleteTarefa(index)}
            />))}

        </div>
    )
}

export default ListaNomes;
