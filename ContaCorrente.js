import { Cliente } from "./Cliente.js";

// #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields 
export class ContaCorrente {
    agencia; // Atributo publico
    _cliente; // Atributo Privado
    _saldo = 0;// o anderline indica que a classe e privada, neste caso não devemos acessa la de fora do escopo. 
    
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

constructor(cliente, agencia){
    this.agencia = agencia;
    this.cliente = cliente;
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