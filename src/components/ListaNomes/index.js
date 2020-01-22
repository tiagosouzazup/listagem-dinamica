import React, {useState} from  'react';

import Lista from '../Lista';

import Tarefa from '../Tarefa';


const ListaNomes = () => {
    const [tarefas, setTarefas] = useState([]);

    function addNovaTarefa(tarefa) {
        const nomes = Array.from(tarefas);
        nomes.push({id: tarefas.length, value: tarefa});
        setTarefas(nomes);
    }
    return (
        <div>
            <Tarefa onSubmit={addNovaTarefa} />
            {tarefas.map(({id, value}, index) => (
              <Lista
              key={id}
              value={value}
              /> 
            ))}
        </div>
    )
}

export default ListaNomes;
