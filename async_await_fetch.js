// Exemplo de Funcao Async Await (Fetch) na busca do último nome de usuario. 

// Funcao p/ pegar os dados desejados
function getUser(id) { // ID é usado como argumento para busca do usuario 

    return fetch (`https://reqres.in/api/users?id=${id}`) // URL da API onde os dados serao extraidos e a indicacao de que o ID é o parametro para definir qual usuario 

    .then ((data) => data.json()) // Request com pedido de arquivo no tipo .json

    .catch ((err) => console.log (err)) // Catch para exibicao de possivel erro com a request
}

// Funcao para exibicao dos dados coletados pela funcao getUser
async function showUserName(id) {

    const user = await getUser(id) // Await com finalidade de fazer com que a funcao aguarde ate que a outra funcao (getUSer) seja executada e forneca os dados que serao exibidos, agora sim, por esta funcao (showUserName)

    console.log(`o nome do usuário é: ${user.data.last_name}`) // Indicacao de qual dado deve ser exibido. Neste caso o ultimo nome.
}

showUserName(1); // Chamada da Funcao com indicacao do parametro do usuario desejado(1)