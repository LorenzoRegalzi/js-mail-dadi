var risposta = prompt("inserisci email");
console.log(risposta);
var pass = ["mario.boolean@gmail.com" , "luigi.boolean@gmail.com"];
console.log(pass);

if (risposta == pass [0]) {
    console.log('accesso corretto');
    document.getElementById('corretta').innerHTML= "e-mail corretta";
}
else if (risposta == pass [1]) {
    console.log('accesso corretto');
    document.getElementById('corretta').innerHTML = "e-mail corretta";
}
else {
    console.log('email sbagliata');
    document.getElementById('errata').innerHTML = "e-mail sbagliata";
}
