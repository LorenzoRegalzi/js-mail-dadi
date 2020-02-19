var risposta = prompt("inserisci email");
console.log(risposta);
var pass = ["mario.boolean@gmail.com" , "luigi.boolean@gmail.com"];
console.log(pass);

if (risposta == pass [0]) {
    console.log('accesso corretto');
}
else if (risposta == pass [1]) {
    console.log('accesso corretto');
}
else {
    console.log('email sbagliata');
}
