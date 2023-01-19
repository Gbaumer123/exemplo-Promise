//exemplo sem a promises
function somaNumbers(){
    let result = 1 + 1

    if (result == 2 ){
        sucesso()
    }else{
        erro()
    }
}


function sucesso(){
    console.log("SIM!   Numero 2.")
}

function erro(){
    console.log("Ops!   Soma está errada")
}


somaNumbers();

//exemplo com a promises
let p = new Promise((resolve, reject)=>{
        let a = 1 + 1
     
        if (a == 2 ){
            resolve('Sucesso')
        }else{
            erro('Falhou')
        }
})

//CHAMA A PROMISSE 
p.then((message)=> {  
    console.log('a soma foi um ' + message)
}).catch((err)=>{
    console.log('a soma  ' +err)
})