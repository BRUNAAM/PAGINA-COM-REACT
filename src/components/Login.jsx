import React from "react";
import Formulario from "./Formulario";
import { collection, getDocs } from "firebase/firestore";
import db from "../database/firebase";

function Login() {
    return
    <div>
        <form>
            <input type="text" />
            <input type="password" />
            <button type="submit">Enviar</button>
        </form>
    </div>
}
export default Login;
