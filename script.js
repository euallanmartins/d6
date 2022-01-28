// Crie um objeto que receba ao menos três propriedades sobre você.

let eu = {
    nome: "allan",
    idade: 22,
    Comida: "Pizza"
  } 

// Adicione uma nova propriedade sem alterar seu objeto inicial.

eu.gosto = "tatuagens"

// Remova uma propriedade desse objeto.

delete eu.gosto

//Mostre no console todas as propriedades desse objeto.

console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastros = {
  nome: "carlos",
  idade: 12,
  telefone: "(00)000000-00000",
  amigos: ["Gabriel", "antonio", "allan", "julia"]
}

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastros.amigos)