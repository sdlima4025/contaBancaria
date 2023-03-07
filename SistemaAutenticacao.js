// ser autenticavel siginifica ter o metodo autenticar

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