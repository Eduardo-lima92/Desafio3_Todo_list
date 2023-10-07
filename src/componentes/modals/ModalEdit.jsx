import "./index.scss"

const ModalEdit = ({ isOpen, onclose, TaskDescription}) => {
    if (isOpen) {
        return (
            <div className="modalContainer">
                <h1 className="modalContainer__titulo">Deseja editar este item?</h1>
                <p><b>Descrição: </b>{TaskDescription}</p>
                <div className="modalContainer__botao">
                    <button className='no' onClick={onclose}>Não</button>
                    <button className='yes'>Sim</button>
                </div>
            </div>
        
  )
}
return null;
}

export default ModalEdit
