/* ser autenticavel siginifica ter o metodo autenticar.
Base OO == Polimorfismo ?
Duck Typing == não importa se é um pato, mais se o comportamento 
é de um Pato!
Encapssulamento para proteger os dados, exemplo conta corrente,
usamos os acessores Get e Set para tal.
herança ... ?
classes e metodos abstratos & ou privados.
Abstração!!!
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehautentivavel(autenticavel)){
            return autenticavel.autenticar(senha);
            }
        return false;
        }
    static ehautentivavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    }
} 

/* O que aprendemos nessa aula:

operador in

operador instanceOf

Como proteger nossos sistemas

interfaces padronizadas

 Ducky Type */