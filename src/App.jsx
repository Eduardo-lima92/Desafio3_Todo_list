import { useState } from 'react'
import './global.scss'
import Header from './componentes/Header/Header'
import Titulo from './componentes/Titulo/Titulo'
import Tabela from './componentes/Tabela/Tabela'
import { DB } from './mock/task.mock'

const App = () => {
  

  return (
    <>
        <Header></Header>
        <Titulo></Titulo>
        <Tabela data={DB}/>
    </>
  );
};

export default App
