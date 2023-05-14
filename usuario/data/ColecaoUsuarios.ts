import { Usuario } from "../model/Usuario";

export default class ColecaoUsuarios {
  static readonly usuarios: Usuario[] = [];

  async cadastrarUsuario(usuario: Usuario) {
    ColecaoUsuarios.usuarios.push(usuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return (
      ColecaoUsuarios.usuarios.find((usuario) => usuario.email === email) ||
      null
    );
  }
}
