// // Hello World!
// // let - pode mudar
// //const - não pode mudar
// const mensagem = "olá eu"

// {
//     let mensagem = "olá, mundo!"
//     console.log(mensagem);
// }

// console.log(mensagem);

// arrays, objetos
// let meta = {
//     value: 'ler um livro por mês',
//     checked: true,
// }

// let metas = [
//     meta,
//     {
//         value: "caminhar 20 minutos todos os dias",
//         checked: false
//     }
// ]

// console.log(metas[1].value)

// meta.value = "não é mais ler um livro"
// console.log(meta.value)

//Function       // arrow function
// const criarMeta = () => {}

// function criarMeta(){}


const start = () => {
    while(true){
        let opcao = "sair"
        switch(opcao){
            case "cadastrar": 
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}
start()
