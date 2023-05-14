import CasoDeUso from "../../shared/CasoDeUso";
import ColecaoUsuarios from "../data/ColecaoUsuarios";
import { Usuario } from "../model/Usuario";
import RegistrarUsuario from "./ResgistrarUsuario";

type UsuarioDTO = {
  email: string;
  senha: string;
};

export default class LoginService
  implements CasoDeUso<UsuarioDTO, Usuario | null>
{
  async executar(usuarioDTO: UsuarioDTO): Promise<Usuario | null> {
    const colecaoUsuario = new ColecaoUsuarios();

    const usuario = await colecaoUsuario.buscarPorEmail(usuarioDTO.email);

    if (!usuario === null) return null;

    if (
      usuario?.senha &&
      RegistrarUsuario.criptografarSenha(usuario).senha === usuario.senha
    ) {
      return { ...usuario, senha: "" };
    }

    return usuario;
  }
}
