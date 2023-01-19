var promisse = Promise.resolve(3)
var promisse2 = Promise.resolve(4)
var promisse3 = Promise.resolve(4)

Promise.all([promisse, promisse2, promisse3])
    .then(function(values){ //o then só é executado depois de executar todas as promises


    })

    
Promise.race([promisse, promisse2, promisse3])
.then(function(values){ //como estamos usando o race o then é executado quando retornar a primeira promisse, o race pega a primeira e ignora as outras


})

