import {Conta} from "./conta/conta.js/index.js";

export class ContaSalario extends Conta{
    constructor(cliente) {
        super(0 ,cliente, 1001);
    }
    sacar(valor) {
        const taxa = 1.01;
        return this._sacar();
    }
}

/**
 * 

O que aprendemos nessa aula:

    Como o JS sabe quem está sendo instanciado.

    Pensando na proteção do nosso sistema

    Lançando erros para o sistema

    Classes abstratas

    Métodos abstratos

    Erros em tempo de execução


 */