import React from "react";
import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Secao from "./components/Secao";
import Cartao from "./components/Cartao";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import "./App.css";

import { collection, getDocs } from "firebase/firestore";
import db from "./database/firebaseConfig";

const App = () => {
  //Busca todos os documentos da coleção "comentarios"
  //e lista no console cada um dos documentos salvos
  const lerBanco = async () => {
    const comentarios = await getDocs(collection(db, "comentarios"));
    comentarios.forEach((documento) => {
      console.log(documento.data());
    });
  };

  const campos = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    },
    {
      nome: "Email Válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Cidade",
      id: "cidade",
      tipo: "text",
    },
    {
      nome: "Estado",
      id: "estado",
      tipo: "text",
    },
    {
      nome: "Telefone de Contato",
      id: "fone",
      tipo: "text",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    }, // fim
  ];

  const CampoServicos = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Titulo",
      id: "titulo",
      tipo: "text",
    },
    {
      nome: "Descrição",
      id: "descricao",
      tipo: "text",
    },

    {
      nome: "Imagem",
      id: "img",
      tipo: "text",
    },
    //fim
  ];
  return (
    <div>
      <Cabecalho />
      <Menu />
      <Secao>
        <img src="src/assets/topo.jpg"></img>
      </Secao>

      <Secao>
        <Titulo texto="Serviços" />
        <Cartao
          imagem="src/assets/imagem.webp"
          titulo="SEU PET SAUDAVEL" />
        <Cartao descricao="**Cuide bem de quem te faz feliz!**
Na nossa clínica veterinária, a saúde e o bem-estar do seu pet são nossas prioridades. Oferecemos atendimento especializado com carinho e dedicação para garantir que seu companheiro receba o melhor cuidado. Seja consulta de rotina, vacinas, ou tratamentos mais complexos, estamos aqui para cuidar de quem sempre está ao seu lado. Visite-nos e veja como podemos ajudar a manter seu pet saudável e feliz! "/>
        <Formulario campos={CampoServicos} />
      </Secao>

      <Secao>
        <Titulo texto="Contato" />

        <Formulario campos={campos} />
        <button onClick={lerBanco}>Ler dados do Banco</button>

      </Secao>
    </div>
  );
};
export default App;
