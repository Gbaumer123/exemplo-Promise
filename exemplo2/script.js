//EXEMPLO SEM A PROMISE
/*
const nome = 'Gabrie'

function  retornaPessoa(callback, errorCalback) {
    if (nome != 'Gabriel' && nome != 'Marques'){
        errorCalback({
            name: '   está errado ',
            message: nome + '? realmente?'
        })
    }else{
        callback({
            name: nome,
            message: '  os nomes foram encontrados'
        })
    }
}

retornaPessoa((result) =>{
    console.log(result.name + ' ? sim' + result.message)
}, (error) => {
    console.log(error.name + ' '  + error.message)
})
*/


//EXEMPLO COM PROMISES
const nomePessoa = 'Gabri'

function  retornaPessoa(callback, errorCalback) {

    return new Promise ( (resolve,reject) => {


    if (nomePessoa != 'Gabriel' && nomePessoa != 'Marques'){
        reject({
            name: '   está errado ',
            message: nomePessoa + '? realmente?'
        })
    }else{
        resolve({
            name: nomePessoa,
            message: '  os nomes foram encontrados'
        })
    }
    
})
}

retornaPessoa()
  .then((result) =>{
    console.log(result.name + ' ? sim' + result.message)
}).catch ((error) => {
    console.log(error.name + ' '  + error.message)
})


