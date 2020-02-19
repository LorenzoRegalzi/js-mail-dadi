alert('premi per giocare')
var numeroUtente = Math.random()*10;
console.log('il tuo numero e '+numeroUtente.toFixed(0));
document.getElementById('Primo').innerHTML = numeroUtente.toFixed(0)+' numero utente';
var pc = Math.random()*10;
console.log('il numero del pc e '+ pc.toFixed(0));
document.getElementById('Secondo').innerHTML = pc.toFixed(0) + ' numero del pc';



if (numeroUtente>pc) {
    console.log('hai vinto tu!');
    document.getElementById('vittoria').innerHTML ='hai vinto tu';
} else if  (numeroUtente === pc) {
    console.log('pareggio');
} else {
    console.log('ha vinto il pc');
    document.getElementById('sconfitta').innerHTML ='hai perso';
}
