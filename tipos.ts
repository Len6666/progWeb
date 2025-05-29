// == tipos em typescript ===

// primitivos
let texto: string = 'ola mundo'; 
let numero: number = 666; 
let ativo: boolean = true;

// array
let numeros: number[] = [1,2,3];
let palavras: Array<string> = ["typescript", "é", "massa"];

//tuplas
let pessoa: [string, number] = ['Len', 17];

// enum -- enunciado 
enum Cores {
    verde,
    rosa,
    marrom
}

let corfavorita: Cores = Cores.verde;

//any (evitar sempre q possivel)
let dadoaleatorio: any = 5;
dadoaleatorio = "texto";
dadoaleatorio = true;

// unknow (mais seguro q any)
let dadodesconhecido: unknown = 10;

// void
function mostraralerta() : void{
    console.log{"atencao"};
}

// null e underfined
let nada: null = null
let indefinido: undefined = undefined


// never (usado quando a funçao nunca retorna)
function errofatal(mensagem: string) : never{
    throw new Error(mensagem)
}

//aliases - apelidos
type Usuario = {
    nome: string;
    idade: number;
}

let Usuario: Usuario = {nome: 'Len', idade: 17000}
