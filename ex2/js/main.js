alert('premi per giocare')
var numeroUtente = Math.random()*10;
console.log('il tuo numero e '+numeroUtente.toFixed(0));
var pc = Math.random()*10;
console.log('il numero del pc e '+ pc.toFixed(0));




if (numeroUtente>pc) {
    console.log('hai vinto tu!');
} else if  (numeroUtente == pc) {
    console.log('pareggio');
} else {
    console.log('ha vinto il pc');
}
