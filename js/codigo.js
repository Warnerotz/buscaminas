window.onload = function () {
    //facil 9x9 y 10 minas
    //intermedio 14x14 y 30 minas
    //var minas
    //var cantBanderas = 0;
    //var perder = false;
    //var ganar = false;
    var nivel = 0;
    var filas = 0;
    var columnas = 0;
    var minas =0;
    //listener para el nivel principiante que llama a la funcion crearTablero y le manda el numero de filas y columnas.
    document.getElementById("prin").addEventListener("click",iniciarJuego , false)


    document.getElementById("inter").addEventListener("click", iniciarJuego, false)

    
    

    function iniciarJuego(){
        
        if(this.id=="prin"){
            nivel =1;
        }else{
            
            nivel =2;
        }
        
        comprobarNivel();
        crearTablero();
        minas = iniMatrizMinas();
    }

    function comprobarNivel() {

        switch (nivel) {
            case 1:
                filas = 9;
                columnas = 9;
                break;
            case 2:
                filas = 14;
                columnas = 14;


        }
    }


    function crearTablero() {
        //creamos la tabla y le asignamos las clases y atributos q necesitemos
        var div = document.createElement("div");

        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tablaTablero");
        //bucle para introducir filas y columnas.
        for (var i = 0; i < filas; i++) {
            var fila = document.createElement("tr");
            for (var j = 0; j < columnas; j++) {
                var columna = document.createElement("td");
                var input = document.createElement('input');
                input.setAttribute("type", "button");
                input.classList.add("btn");
                input.classList.add("btn-default");
                input.classList.add("tamInputs");
                input.setAttribute("id", i + "X" + j);
                //hacemos que el input cuelgue del td.
                columna.appendChild(input);
                //hacemos que el td cuelgue de la fila.
                fila.appendChild(columna);
            }
            tabla.appendChild(fila);
        }

        document.getElementById("tablero").appendChild(tabla);
    }
    
    function iniMatrizMinas(){
        var tabla =[];
        for(var i = 0; i< filas; i++){
            for(var j = 0; i < columnas; i++){
                tabla[i][j] = 0;                 
            } 
        }
        return tabla;
        
    }
    
    

}
