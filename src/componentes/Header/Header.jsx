import React from "react";
import "./index.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">

           <Link to={"/Organizacao"}><button>Organização</button></Link> 
            <button id="task">Tarefas</button>

        </div>
    )
}

export default Header