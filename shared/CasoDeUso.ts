export default interface CasoDeUso<Entrada, Saida> {
  executar(entrada: Entrada): Promise<Saida>;
}
