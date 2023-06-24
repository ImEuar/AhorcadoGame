const palabras = ["cohete", "telescopio", "robotica", "astronomia", "estrella", "planeta", "nebulosa", "espacio", "tiempo", "teoria", "observatorio", "constelacion", "satelite", "universo", "gravedad"]
let numeroAleatorio = Math.floor(Math.random()*15)
let palabraElegida = palabras[numeroAleatorio]
let texto=[]
let x = 0
let intentos = 0
let correcto
var imagen = document.createElement("img")
var teclado = document.getElementById("teclado")
let btn = document.createElement("button")
let txt = document.createElement("p")
txt.innerHTML = "¡Qué mal, perdiste! ¡Has condenado a este hombre!"
txt.classList.add("p4")
var span = document.createElement('span');
span.innerHTML = '<button id="but" onclick="window.location.reload()" class="button1">Jugar de nuevo</button>';
const palabraEscondida = []
function validar(letraEncontrada) {
    espacios=""
    correcto = false
    for(let i=1;i<=palabraElegida.length;i++){
        let letra = palabraElegida.substring(i,i-1)
        console.log(letra)
        if(letra == letraEncontrada){
            palabraEscondida[i-1] = " " + letraEncontrada + " "
            correcto = true
        }else if(x<palabraElegida.length){
            palabraEscondida[i-1] = " _ "
            x++
        }
        texto[i-1] = palabraEscondida[i-1]
        document.getElementById("palabra").innerHTML = texto.join(" ")
    }
    let ganarOPerder = palabraEscondida.includes(" _ ")
    if(ganarOPerder==false){
        for(let i=1;i<=palabraElegida.length;i++){
            txt.innerHTML = "¡Felicidades, ganaste! ¡Has salvado a este hombre!"
            teclado.style.display = "none"
            document.getElementById("div1").appendChild(txt)
            document.getElementById("div1").appendChild(span)
            document.getElementById("palabra").style.color = "rgb(140, 255, 201)"
        }
        imagen.setAttribute("src", ("./images/9.png"))
    }
    if(correcto==false){
        if(intentos<7){
            intentos++
            imagen.setAttribute("src", ("./images/"+intentos+".png"))
            imagen.setAttribute("width", "300")
            imagen.setAttribute("heigth", "300")
            document.getElementById("imagen").appendChild(imagen)
        }else{
            intentos++
            imagen.setAttribute("src", ("./images/"+intentos+".png"))
            imagen.setAttribute("width", "300")
            imagen.setAttribute("heigth", "300")
            document.getElementById("imagen").appendChild(imagen)
            teclado.style.display = "none"
            document.getElementById("div1").appendChild(txt)
            document.getElementById("div1").appendChild(span)
            btn.onclick = "location.reload()"
            for(let i=1;i<=palabraElegida.length;i++){
                let letra = palabraElegida.substring(i,i-1)
                if(palabraEscondida[i-1] == " _ "){
                    palabraEscondida[i-1] = " " + letra + " "
                    texto[i-1] = "<span class='p5'>" + palabraEscondida[i-1] + "</span>"
                }
                document.getElementById("palabra").innerHTML = texto.join(" ")
            }
        }
    }
}
function intentarDeNuevo(){
    texto = ""
    x = 0
    intentos = 0
}

validar()

function btnQ(){
    document.getElementById("q").disabled = true;
    validar("q")
}
function btnW(){
    document.getElementById("w").disabled = true;
    validar("w")
}
function btnE(){
    document.getElementById("e").disabled = true;
    validar("e")
}
function btnR(){
    document.getElementById("r").disabled = true;
    validar("r")
}
function btnT(){
    document.getElementById("t").disabled = true;
    validar("t")
}
function btnY(){
    document.getElementById("y").disabled = true;
    validar("y")
}
function btnU(){
    document.getElementById("u").disabled = true;
    validar("u")
}
function btnI(){
    document.getElementById("i").disabled = true;
    validar("i")
}
function btnO(){
    document.getElementById("o").disabled = true;
    validar("o")
}
function btnP(){
    document.getElementById("p").disabled = true;
    validar("p")
}
function btnA(){
    document.getElementById("a").disabled = true;
    validar("a")
}
function btnS(){
    document.getElementById("s").disabled = true;
    validar("s")
}
function btnD(){
    document.getElementById("d").disabled = true;
    validar("d")
}
function btnF(){
    document.getElementById("f").disabled = true;
    validar("f")
}
function btnG(){
    document.getElementById("g").disabled = true;
    validar("g")
}
function btnH(){
    document.getElementById("h").disabled = true;
    validar("h")
}
function btnJ(){
    document.getElementById("j").disabled = true;
    validar("j")
}
function btnK(){
    document.getElementById("k").disabled = true;
    validar("k")
}
function btnL(){
    document.getElementById("l").disabled = true;
    validar("l")
}
function btnÑ(){
    document.getElementById("ñ").disabled = true;
    validar("ñ")
}
function btnZ(){
    document.getElementById("z").disabled = true;
    validar("z")
}
function btnX(){
    document.getElementById("x").disabled = true;
    validar("x")
}
function btnC(){
    document.getElementById("c").disabled = true;
    validar("c")
}
function btnV(){
    document.getElementById("v").disabled = true;
    validar("v")
}
function btnB(){
    document.getElementById("b").disabled = true;
    validar("b")
}
function btnN(){
    document.getElementById("n").disabled = true;
    validar("n")
}
function btnM(){
    document.getElementById("m").disabled = true;
    validar("m")
}