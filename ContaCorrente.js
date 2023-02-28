import { Cliente } from "./Cliente.js";

// #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields 
export class ContaCorrente {
    static numeroDeContas = 0;
    
      set cliente(novoValor) {
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
       
    }
        get cliente() {
            return this._cliente;
}
    get saldo() {
        return this._saldo;
}

constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numeroDeContas += 1;
}

    // Regra de Negocio sacar === tem que ter saldo!
    sacar(valor) { // dentro dos parenteses estão os parametros ou argumentos
        if(this._saldo >= valor) {
            this._saldo -= valor;
                return valor;
        }else {
            console.log('Saldo Insuficiente!');
        }
    }
    depositar(valor) {
        if(valor <= 0) {
            return;     
        } 
        this._saldo += valor;        
    }

    transferir(valor, conta) {
        const valoSacado = this.sacar(valor);
        conta.depositar(valoSacado);
    }
}