// A CLASSE CLIENTE OU SEJA UM MOLDE
class Cliente {
    nome;
    cpf;
    agencia;
    saldo;  
}

class ContaCorrente {
    agencia;
    saldo; 
    
    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
        }else {
            console.log('Saldo Inssuficiente!');
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
 contaCorrenteRicardo.saldo = 0;
 contaCorrenteRicardo.agencia = 1001;


console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(150);



console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);

