import { useState } from "react";

function Formulario({ campos }) {
    const [dados, setDados] = useState({});
     
    const salvarDados = (e) => {
        preventDefault();
    }

    return (
        <form action="Formulario">
            {campos.map((item) => (
                <div key={item.id}>
                    <label htmlFor={item.id}>{item.nome}</label>
                    <input id={item.id} type={item.tipo} />
                    value={dados}
                </div>
            ))}
            <button type="submit">Enviar Notificação</button>
        </form>
    );
}
export default Formulario;
