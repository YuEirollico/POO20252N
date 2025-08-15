import { Personagem } from "./Personagem";

const p: Personagem = new Personagem();
p.nome = "Edécio";
p.classe = "Monge";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1+ Math.random() + 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual= p.manaMaxima;
p.vidamaxima= 100;
p.vidaatual = p.vidamaxima;
p.poderAtaque = 1;

console.table(p);
