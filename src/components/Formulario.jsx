import "./Formulario.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../database/firebaseConfig";
import React, { useState } from "react";

function FormularioComImagem() {
  const [imagem, setImagem] = useState(null);
  const [imagemPreview, setImagemPreview] = useState(null);

  // Função para lidar com a seleção da imagem
  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    setImagem(file);
    setImagemPreview(URL.createObjectURL(file)); // Cria uma URL temporária para pré-visualização
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar a imagem para o servidor ou qualquer outra ação
    console.log("Imagem selecionada:", imagem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="uploadImagem">Carregar Imagem</label>
        <input
          id="uploadImagem"
          type="file"
          accept="image/*"
          onChange={handleImagemChange}
        />
      </div>

      {imagemPreview && (
        <div>
          <h3>Pré-visualização:</h3>
          <img src={imagemPreview} alt="Pré-visualização" width="200" />
        </div>
      )}

      <button type="submit">Enviar</button>
    </form>
  );
}


function Formulario({ campos }) {
  const [dados, setDados] = useState({});

  const alteraDados = (e) => {
    const valor = e.target.value;
    const chave = e.target.id;
    setDados({ ...dados, [chave]: valor });
  };

  const salvarDados = async (e) => {
    e.preventDefault();
    console.log(dados);
    await addDoc(collection(db, "comentarios"), dados);
  };

  return (
    <form id="form_contato" onSubmit={salvarDados}>
      {campos.map((item) => (
        <div className="contato" key={item.id}>
          <label htmlFor={item.id}>{item.nome}</label>
          <input
            id={item.id}
            type={item.tipo}
            value={dados[item.id] || ''}
            onChange={alteraDados}
          />
        </div>
      ))}
      <button type="submit">Enviar informação</button>
    </form>
  );
}

export default Formulario;

