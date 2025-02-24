export class Cliente {
  constructor(
      public cod: number,
      public nome: string,
      public numero: string
  ) {
      if (!cod || !nome || !numero) {
          throw new Error("Todos os campos são obrigatórios!");
      }
  }
}