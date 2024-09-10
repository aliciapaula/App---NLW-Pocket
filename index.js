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

const { select, input } = require('@inquirer/prompts')

let meta ={
    value: 'Tomar 3L de água por dia',
    checked: false,
}
let metas = [meta]

const cadastrarMeta = async() => {
    const meta = await input({message:"Digite a meta:"})

    if(meta.length == 0){
        console.log('A meta não pode ser vazia')
        return
    }
    metas.push({ value: meta, checked: false })
}

const start = async () => {
    while(true){
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        switch(opcao){
            case "cadastrar": 
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}
start()
