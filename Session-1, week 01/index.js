// console.log("Hello World");

// // varaible declaration, conditional logic, loop, function
// // typescript
// let a = 1;
// console.log(a);

// if (a === 1)
//     console.log("It's 1");
// else console.log("It's not 1");

// for(let i = 0 ; i < 5; i++){
//     console.log(i);
// }

// function printSomething(varaible){
//     console.log(varaible);
// }

// printSomething("Hell0 world");
require('dotenv').config();


const express = require('express');
const fetch = require('node-fetch')

// database


async function getUsersFromDatabase() {
    let usersAll = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(usersAll);
    let users = await usersAll.json();
    console.log(users);
    return users;
}

const server = express()

let port;
if (process.env.PORT) port = process.env.PORT;
else port = 3000;


server.get('/', (req, res) => {
    res.send('Hello World!')
});

server.get('/get-users', async (req, res) => {
    let users = await getUsersFromDatabase();
    res.send(users);
});



server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


