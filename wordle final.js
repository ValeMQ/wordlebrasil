let diccionario = ["ACHO", "FICO", "LIXO", "BOLO"];
console.log = (Math.floor(Math random () * dicionario.length-1)+1);
let.indice = (Math.floor (Math random () * dicionario.length-1)+1);
console.log (indice);



let palavra = dicionario [indice];
console.log (palabra);
let intentos = 4;
fetch ("https://random-word-api.herokuapp.com/word?length=5")
    .then (Response => Response.json())
    .then (Response => {
            console.log (response)
            palabra = response [0]. toUpperCase ()
    })
    .catch (err => console.error (err));

const input = document.getElementById("guess-input");
const valor = input.value;


const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function leerIntento(){
    let intento = document.getElementById("guess/input");
    intento = intento.value;
    intento = intento.toUpperCase ();

    return intento;
}

function intentar (){
    const TENTO = leerIntento ();
    const GRID = document.getElementById("grid");
    const ROW = document. createElement ('div');
    ROW.className = 'row';

if (TENTO.length !=5) {
    alert ('deve inserir uma palavra de 4 letras')
    return }

if (TENTO === palavra ) {
    terminar ("<h1>¡PARABENS, VC GANHOU!</h1>")
    return

}


for (let i in palavra ){
const SPAN = document.createElement ('spam');
SPAN.className = 'letter';

    if (TENTO [i]===palavra[i]){
        SPAN.innerHTML = TENTO[i];
        SPAN.style.backgroundColor = '#00c69e';

    }else if (palavra.includes(TENTO[i])){
        SPAN.innerHTML = TENTO[i];
        SPAN.style.backgroundColor = 'f5e45f';
    
    }else {
        SPAN.innerHTML = TENTO[i];
        SPAN.style.backgroundColor = '243700'

    }
    ROW.appendChild(SPAN)

}
GRID.appendChild(ROW)
intentos--
if((intentos>0)&&(intentos<4)){
    terminar("<h1>SIGUE PARTICIPANDO,</h1>")
}
intentos--
if (intentos==0){
    terminar("<h1>JA PERDEU!</h1>")
    }
}


function terminar(mensaje){
    const input = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}