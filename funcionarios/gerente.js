import { Funcionario } from "./funcionario.js";

import(Funcionario);
export class Geremte extends Funcionario {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);
    this.bonificacao = 1.1;
  }
}
