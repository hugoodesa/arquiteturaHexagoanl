import RegistrarUsuario from "./usuario/service/ResgistrarUsuario";
import ColecaoUsuarios from "./usuario/data/ColecaoUsuarios";
import { Usuario } from "./usuario/model/Usuario";

const usuario: Usuario = {
  email: "hugoodesa",
  nome: "Hugo",
  senha: "hugoodesa",
};

const registrarUsuario = new RegistrarUsuario();
const colecaoUsuarios = new ColecaoUsuarios();
registrarUsuario.executar({ email: "hugoodesa", nome: "hugo", senha: "asd" });

const usuarioEncontrado = colecaoUsuarios.buscarPorEmail(usuario.email);
console.log(usuarioEncontrado);
