import React from "react";
import "./index.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">

          <Link to={"/Organizacao"}><button>Organização</button> </Link> 
          <Link to={"/"}><button>Tarefas</button> </Link>

        </div>
    )
}

export default Header