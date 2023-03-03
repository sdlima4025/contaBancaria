import { Funcionario } from "./funcionarios/funcionarios.js";

export class Diretor extends Funcionario {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this.bonificacao = 2;
  }
}
