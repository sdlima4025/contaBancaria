import { Cliente } from "./Cliente.js";
import { Diretor } from "./Diretor.js";
import { Gerente } from "./Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Rodrigo", 10000, 12345678900);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612300, "456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
