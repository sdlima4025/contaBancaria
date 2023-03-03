// classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Este Objeto não deveria ser instanciado Diretamente, pois esta é uma classe abstrata!");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    
        
    }

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
    // Metood Abstrato
    sacar(valor) { 
        throw new error("Esta é uma classe abstrata, deve ser instanciada");
        }
        _sacar(valor, taxa) {
            const valorSacado = taxa * valor;
            if(this._saldo >= valorSacado) {
                this._saldo -= valorSacado;
                    return valorSacado;
        }
    }
    depositar(valor) {  
        this._saldo += valor;        
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
