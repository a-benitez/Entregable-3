//Buscador de profesores según el tipo de actividad que enseña en un gimnasio

//Información por entrada de usuario
let clase = prompt("Ingrese la clase a la que quiere asistir ");
clase = clase.toLowerCase();

//La palabra "Ninguna" corta el bucle

while(clase != "salir"){
    switch (clase){
        case "crossfit":
            alert("Lorena Lopez");
            break;
        case "taebo":
            alert("Lucas Martinez");
            break;
        case("musculacion"):
            alert("Sebastian Gonzalez");
            break;
        case("elongacion"):
            alert("Paula Perez");
            break;
        case("step"):
            alert("Marcos Rizzo");
            break;
        case("aerolocal"):
            alert("Silvina Rodriguez");
            break;
        case("ritmos"):
            alert("Marcela Sabatucchi");
            break;
        case("yoga"):
            alert("Gabriela Cancellaro");
            break;
        case("funcional"):
            alert("Maximiliano Provenzani");
            break;                
        default:
            alert("Error, intentá nuevamente");
            break;
    }
    //Se vuelve a pedir el dato para que vuelva a evaluar si es != salir (por fuera del switch ya que pertenece al while)
    clase = prompt("Ingrese la clase a la que quiere asistir ");
    clase = clase.toLowerCase();
}


