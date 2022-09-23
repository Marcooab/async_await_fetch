function getUser(id) { 
    return fetch (`https://reqres.in/api/users?id=${id}`) 
    .then ((data) => data.json()) 
    .catch ((err) => console.log (err)) 
}

async function showUserName(id) {
    const user = await getUser(id) 
    console.log(`o nome do usuário é: ${user.data.last_name}`) 
}

showUserName(1); 
