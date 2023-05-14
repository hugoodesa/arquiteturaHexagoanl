import CasoDeUso from "../../shared/CasoDeUso";
import ColecaoUsuarios from "../data/ColecaoUsuarios";
import { Usuario } from "../model/Usuario";
export default class RegistrarUsuario
  implements CasoDeUso<Required<Usuario>, void>
{
  public static criptografarSenha(usuario: Usuario) {
    let usuarioCripto = { ...usuario };

    if (usuarioCripto.senha) {
      const senha = usuarioCripto.senha.split("").reverse().join("");
      usuarioCripto = { ...usuarioCripto, senha };
    }

    return usuarioCripto;
  }

  async executar(usuario: Required<Usuario>): Promise<void> {
    const colecaoUsuarios = new ColecaoUsuarios();
    await colecaoUsuarios.cadastrarUsuario(
      RegistrarUsuario.criptografarSenha(usuario)
    );
  }
}
