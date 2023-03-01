import { Conta } from "./Conta.js";

// #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields 
export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

constructor(cliente, agencia) {
    super(0,cliente,agencia);
    ContaCorrente.numeroDeContas += 1;
}
    // sobreescrevendo o corportamento de sacar da classe Mãe
    sacar(valor) {
        let taxa = 1.1;
            return this._sacar(valor, taxa);
            }
    }

    /** 

    O que aprendemos nessa aula:

        Especializando código

        Herdando propriedades e atributos

        Sobrecarga de métodos

        Compartilhando código de forma segura

        Mantendo nosso código na linguagem do cliente

        Evitando código muito complicado através da herança

        Palavra-chave Super

        Método e propriedades privadas e protegidas

 */