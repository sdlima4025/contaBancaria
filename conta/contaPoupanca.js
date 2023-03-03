import { Conta } from "./conta/conta.js/index.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
    super (saldoInicial, cliente, agencia);
    }
    // metodo sacar
    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}

