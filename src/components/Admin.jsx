import React from "react";
import Secao from "./Secao";
import Titulo from "./Titulo";
import Formulario from "./Formulario";
import { collection, getDocs } from "firebase/firestore";
import db from "../database/firebase";

import React from "react";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Secao from "./Secao";
import Cartao from "./Cartao";
import Titulo from "./Titulo";
import Formulario from "./Formulario";
import "./Principal.css";
import { collection, getDocs } from "firebase/firestore";
import db from "../database/firebase";

const Admin = () => {
    const lerBanco = async () => {
        const comentarios = await getDocs(collection(db, "comentarios"));
        comentarios.forEach((documento) => {
            console.log(documento.data());
        });
    };

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
                <Formulario campos={CampoServicos} />
            </Secao>

            <Secao>
                <button onClick={lerBanco}>Ler dados do Banco</button>
            </Secao>
        </div>
    );
};
export default Principal;
