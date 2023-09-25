import React from 'react'
import "./index.scss"

const ModalAdd = ({ isOpenNewTask, onclose}) => {
    if (isOpenNewTask) {
        return (
            <div className="modalContainer">
                <h1 className="modalContainer__titulo">Deseja adicionar uma atividade?</h1>
                <input 
                    className='modalContainer__AddTask'
                    placeholder='Adicione uma tarefa'
                ></input>
                <div className="modalContainer__botao">
                    <button className='no' onClick={onclose}>Não</button>
                    <button className='yes'>Sim</button>
                </div>
            </div>
        
  )
}
return null;
}

export default ModalAdd;