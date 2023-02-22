// A CLASSE CLIENTE OU SEJA UM MOLDE
class Cliente {
    nome;
    cpf;
    
}
// #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields 
class ContaCorrente {
    agencia;
    _saldo = 0;// o anderline indica que a classe e privada, neste caso não devemos acessa la de fora do escopo. 
    
    // Regra de Negocio sacar === tem que ter saldo!
    sacar(valor) { // dentro dos parenteses estão os parametros ou argumentos
        if(this._saldo >= valor) {
            this._saldo -= valor;
        }else {
            console.log('Saldo Insuficiente!');
        }
    }
    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
        }
    }
}

// Objeto1 instanciado
 const cliente1 = new Cliente;
 cliente1.nome = 'Ricardo';
 cliente1.cpf = 11122233309;
 

// Objeto 
 const cliente2 = new Cliente();
 cliente2.nome = 'Alice';
 cliente2.cpf = 88822233309;

 const contaCorrenteRicardo = new ContaCorrente();
 contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);


console.log(contaCorrenteRicardo);