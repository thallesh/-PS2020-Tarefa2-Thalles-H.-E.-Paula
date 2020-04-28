var universidade = {
    nome: 'UFOP',
    cursos: ['engenharia de produção', 'engenharia da computação', 'engenharia elétrica', 'sistemas de informação']
}

var curso = {
    nome: 'engenharia da omputação',
    periodos: 10,
    cargaHoraria: 3630
}


var republica = {
nome: 'Orfanato',
moradores: 5,
tempoDeExistencia: 10
}

var pedido = {
    mesa:'3',
    itens: ['2x cervejas', '1x coca-cola'],
    valor:25,
}

var pessoa0 = {
    nome: 'pedro',
    idade: 20,
    curso: 'engenharia da computação',
    universidade: 'UFOP'

    function pedirConta(pedido){if(this.nome!='Andre')
        return calcularTudo(pedido)
        function calcularIndividual(calcularTudo)
    }else {
        return 'andre nao pode executar essa funcao'
    }
}
var pessoa1 = {
    nome: 'Ana',
    idade: 17,
    curso: 'engenharia da computação',
    universidade: 'UFOP'

    function pedirConta(pedido){if(this.nome!='Andre')
    return calcularTudo(pedido)
    function calcularIndividual(calcularTudo)
}else {
    return 'andre nao pode executar essa funcao'
}
}
var pessoa2 = {
    nome: 'Paulo',
    idade: 23,
    republica: 'Orfanato'

    function pedirConta(pedido){if(this.nome!='Andre')
    return calcularTudo(pedido)
    function calcularIndividual(calcularTudo)
}else {
    return 'andre nao pode executar essa funcao'
}
}
var pessoa3 = {
    nome: 'Armando',
    idade: 17,
    republica: 'Orfanato'

    function pedirConta(pedido){if(this.nome!='Andre')
    return calcularTudo(pedido)
    function calcularIndividual(calcularTudo)
}else {
    return 'andre nao pode executar essa funcao'
}
}
var pessoa4 = {
    nome:'Andre',
    profissao: 'garçom',
    localDeTrabalho: 'Clube da Cerveja'

   checarIDs(pessoa){
       if(pessoa.idade>=18){
           return '${pessoa.nome} pode tomar cerveja';
       }else{
           return '${pessoa.nome} vai tomar coca-cola';
       }
   }
   
}
var bebida0 = {
    tipo: 'cerveja',
    marca: ' Brahma',
    preco: 8.00,
}

var bebida1 = {
    tipo: 'refrigerante',
    marca: 'coca-cola',
    preco: 9.00,
}



var bebidas = [bebida0, bebida1]

function calcularTudo(bebidas){
    var total = 0
    for(var c = 0, c < bebidas.length, c++){
        total += bebidas[c].preco
    }
}

function calcularIndividual(bebidas){
    var total = 0
    for(var c = 0,c < bebidas.length, c++){
        total += bebidas[c].preco
    }
    return total
}
function individual(total){
    return total/4
}


console.log(pessoa0)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

console.log(pessoa4.checarIDs(pessoa0))
console.log(pessoa4.checarIDs(pessoa1))
console.log(pessoa4.checarIDs(pessoa2))
console.log(pessoa4.checarIDs(pessoa3))

console.log(pessoa0.pedirConta)