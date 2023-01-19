const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url) //fetch é uma promise que recebe a url
        .then((resp) => resp.json()) //recebe os dados e converte ele com o json
        .then(function(data) { //retorna um array com as informaçoes passadas na url
            console.log(data)

            return data.map(function(user){ //conseguimos varrer os dados através do map 
                let li =  document.createElement('li'); //li cria um elemento usnado o name e username
                li.innerHTML = `${user.name} {${user.username}}` 
                ul.appendChild(li) //appendChild insere um novo nó na estrutura do DOM de um documento
            })

        })
        .catch((error) => {
        console.log('Opss!')

        })