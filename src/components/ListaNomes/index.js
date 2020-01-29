import React, {useState, useEffect} from  'react';

import Lista from '../Lista';

import Tarefa from '../Tarefa';


const ListaNomes = () => {
    const [tarefas, setTarefas] = useState([]);
    const [encontrado, setEncontrado] = useState(false)
    useEffect(
        () => {
            const nome = "Tiago Souza"
            const achou = tarefas.find(tarefa => tarefa.value===nome)
            if (achou) {
                setEncontrado(true)
            }
            else {
                setEncontrado(false)
            }
        },
        [tarefas]
    )

    function addNovaTarefa(tarefa) {
    
        const nomes = Array.from(tarefas);
        nomes.push({id: tarefas.length, value: tarefa});
        setTarefas(nomes);
    }
    return (
        <div>
            {
                encontrado && 
                <div>
                    nome encontrado 
                </div>
            }
            <Tarefa onSubmit={addNovaTarefa} />
            {tarefas.map(({id, value}) => (
              <Lista
              key={id}
              value={value}
              /> 
            ))}
        </div>
    )
}

export default ListaNomes;
