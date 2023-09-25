import "./index.scss"

const ModalDelete = ({ isOpenDelete, onclose, TaskDescription}) => {
    if (isOpenDelete) {
        return (
            <div className="modalContainer">
                <h1 className="modalContainer__titulo">Deseja excluir este item?</h1>
                <p>{TaskDescription}</p>
                <div className="modalContainer__botao">
                    <button className="no" onClick={onclose}>Não</button>
                    <button className="yes">Sim</button>
                </div>
            </div>
        
  )
}
return null;
}

export default ModalDelete