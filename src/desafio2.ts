// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

// Criando um enum para resolver o problema da profissao diferentes
enum Profissao {
    Atriz,
    Padeiro
}

//Melhorando o código utilizando interface
interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
};

const pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;

const pessoa2 = {} as Pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;


//Melhorando o código utilizando types

type Humano = {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa3: Humano = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}