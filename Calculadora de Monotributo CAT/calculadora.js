
/*var ingresosBrutos = document.getElementById("ing").value;
var supAfectadaMTS2 = document.getElementById("sup").value;
var consumoKwAnual = document.getElementById("ele").value;

var resultado = document.getElementById("result");
var resultadofinal = "hola";
    resultado.innerHTML = resultadofinal; */
document.getElementById("botoncalc").onclick =
function calcular() {

    var ingresosBrutos = document.getElementById("ing").value;
    var supAfectadaMTS2 = document.getElementById("sup").value;
    var consumoKwAnual = document.getElementById("ele").value;

    var resultado = document.getElementById("resultado");

    if (ingresosBrutos < 999657 && supAfectadaMTS2 < 30 && consumoKwAnual < 3330 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria A de monotributo";

    } else if (ingresosBrutos < 1485976 && supAfectadaMTS2 < 45 && consumoKwAnual < 5000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria A de monotributo"

    } else if (ingresosBrutos < 2080367 && supAfectadaMTS2 < 60 && consumoKwAnual < 6700 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria B de monotributo"

    } else if (ingresosBrutos < 2583720 && supAfectadaMTS2 < 85 && consumoKwAnual < 10000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria C de monotributo"

    } else if (ingresosBrutos < 3042435 && supAfectadaMTS2 < 110 && consumoKwAnual < 13000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria D de monotributo"

    } else if (ingresosBrutos < 3803043 && supAfectadaMTS2 < 150 && consumoKwAnual < 16500 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria E de monotributo"

    } else if (ingresosBrutos < 4563652 && supAfectadaMTS2 <= 200 && consumoKwAnual <= 20000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria F de monotributo"

    } else if (ingresosBrutos < 5650236 && supAfectadaMTS2 <= 200 && consumoKwAnual <= 20000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria G de monotributo"

    } else if (ingresosBrutos < 6323918 && supAfectadaMTS2 <= 200 && consumoKwAnual <= 20000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria H de monotributo"

    } else if (ingresosBrutos < 7247514 && supAfectadaMTS2 <= 200 && consumoKwAnual <= 20000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria I de monotributo"

    } else if (ingresosBrutos < 8040721 && supAfectadaMTS2 <= 200 && consumoKwAnual <= 20000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria J de monotributo"

    } else if (ingresosBrutos < 1000000000 && supAfectadaMTS2 < 200 && consumoKwAnual <= 20000 ) {

        return resultado.innerHTML = "Usted pertenece a la Categoria K de monotributo"

    } else resultado.innerHTML = "ERROR , ingrese los datos nuevamente !";
}
;

