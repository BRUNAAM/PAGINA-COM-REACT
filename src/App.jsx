import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import Menu from "./componentes/Menu";
import Secao from "./componentes/Secao";
import Cartao from "./componentes/Cartao";
import Titulo from "./componentes/Titulo";
import Formulario from "./componentes/Formulario";

const App = () => {
  return (
    <div>
      <Cabecalho />
      <Menu />
      <Secao>
        <img src="src/assets/imagem.webp" alt="Imagem Descritiva" />
      </Secao>
      <Secao>
        <Titulo texto="Serviços" />
        <Cartao />
      </Secao>
      <Secao>
        <Titulo texto="Contato" />
        <Formulario campos={[{ id: 'nome', nome: 'Nome', tipo: 'text' }, { id: 'email', nome: 'Email', tipo: 'email' }]} />
      </Secao>


    </div>
  );
};

export default App;
