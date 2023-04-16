// ANIMACIONES Y CAMBIOS DE CLASES
// animacion boton header
 document.getElementById("boton").onmouseover = function arriba() {
    var box = document.getElementById("boton");

    if (box.className == "button1") {
        box.className = "button2"
    } 
    
    document.getElementById("boton").onmouseleave = function afuera(){
        if (box.className == "button2") {
            box.className = "button1"
        } 
    }
}

document.getElementById("botoncalc").onmouseover = function encima(){
    var box = document.getElementById("botoncalc");

    if (box.className == "botoncalc1") {
        box.className = "botoncalc2"
    }

    document.getElementById("botoncalc").onmouseleave = function fuerita() {
        if (box.className == "botoncalc2") {
            box.className = "botoncalc1"
        }
    }
} 









