import { useState } from "react";
import React from "react";
import "./index.scss";
import ModalEdit from "../modals/ModalEdit";
import ModalDelete from "../modals/ModalDelete";
import ModalAdd from "../modals/ModalAdd"

const Tabela = ({data}) => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openNewTask, setOpenNewTask] = useState(false);
    const [openDescription, setOpenDescrition] = useState("");

    const closeModal = () => {
        setOpenModal(false);
        setOpenModalDelete(false);
        setOpenNewTask(false);
    };

    const psModalEdit = (description) => {
        setOpenDescrition(description);
        setOpenModal(true);
    }
    const psModalDelete = (description) => {
        setOpenDescrition(description);
        setOpenModalDelete(true);
    }

    const modalAddTask = () => {
        setOpenNewTask(true);
    };

    return (
        <div>

            <table 
                className="tabela"
                style={{
                    display:
                        openModal || openModalDelete || openNewTask ? "none" : "table",
                }}
            >
                

            <thead>
                <tr>
                    <th className="alinhadoesquerda">Tarefa</th>
                    <th>Status</th>
                    <th className="alinhadodireita">Opções</th>
                </tr>
            </thead>
            
            {data.map((task) => (
                <tbody key={task.id}>
                    <tr>
                        <td>{task.title}</td>
                        <td className="alinhadocentro">
                            <input type="checkbox" readOnly checked={task.completed}/>
                        </td>
                        <td className="alinhadodireita">
                            <img 
                                src="edit.png"
                                onClick={ () => psModalEdit(task.description)} alt="" />
                                <img 
                                    onClick={ () => psModalDelete(task.description)} 
                                    src="delete.png"/>
                        </td>           
                    </tr>
                    
                </tbody>
                
            ))}

            <tbody>
            <tr>
                <td className="italico">Nova tarefa...</td>
                <td></td>
                <td className="alinhadodireita"><img id="add" onClick={() => modalAddTask()} src="add.png"/></td>           
            </tr>

            </tbody>
           
           
            
            </table>

            <ModalEdit
                isOpen={openModal}
                onclose={closeModal}
                TaskDescription={openDescription}
            />

            <ModalDelete
                isOpenDelete={openModalDelete}
                onclose={closeModal}
                TaskDescription={openDescription}
            />

            <ModalAdd isOpenNewTask={openNewTask} onclose={closeModal}/>

            
        </div>

        
        
        
    )
}

export default Tabela














