window.onload = function () {
    //variable que controla el nivel de dificultad
    var nivel = 0;
    //variable que controla la longitud del teclado
    var longitud = 0;
    //variable que controla el numero de bombas
    var numBombas= 0;
    //variable para la matriz con la que crearemos el tablero de juego.
    var minas =[];
    //variable que controla el numero de bombas acertadas
    var numAciertos = 0;
    //variable que controla el numero de espacios vacios descubiertos
    var casillasNoBomba =0;
    
    //listener para el nivel principiante que llama a la funcion crearTablero y le manda el numero de filas y columnas.
    document.getElementById("prin").addEventListener("click", iniciarJuego, false)

    
    document.getElementById("inter").addEventListener("click", iniciarJuego, false)

    function iniciarJuego() {

        if (this.id == "prin") {
            nivel = 1;
        } else {

            nivel = 2;
        }
        alert("entro comprobar nivel");
        comprobarNivel();
        alert("entro crear tablero");
        crearTablero();
        alert("inicializo minas");
        minas = iniMatrizMinas();
        alert("entro generador bombas");
        generadorBombas(minas);
    }
//funcion que segun el nivel pone el tamaño del grid y el numero de bombas.
    function comprobarNivel() {
        
        switch (nivel) {
            case 1:                
                longitud = 9;
                numBombas = 10;
                
                break;
            case 2:                
                longitud = 10;
                numBombas = 15
                break;
        }
        
        casillasNoBomba =(longitud*longitud) - numBombas;
    }


    function crearTablero() {
        //creamos la tabla y le asignamos las clases y atributos q necesitemos
        var div = document.createElement("div");

        var tabla = document.createElement("table");
        tabla.setAttribute("id", "tablaTablero");
        //bucle para introducir filas y columnas.
        for (var i = 0; i < longitud; i++) {
            var fila = document.createElement("tr");
            for (var j = 0; j < longitud; j++) {
                var columna = document.createElement("td");
                var input = document.createElement('input');
                input.setAttribute("type", "button");
                input.classList.add("btn");
                input.classList.add("btn-default");
                input.classList.add("tamInputs");
                input.setAttribute("id", i+j);
                //hacemos los listeners de los inputs
                input.addEventListener("click", mostrarNumero, false);
                //hacemos que el input cuelgue del td.
                columna.appendChild(input);
                //hacemos que el td cuelgue de la fila.
                fila.appendChild(columna);
            }
            tabla.appendChild(fila);
        }

        document.getElementById("tablero").appendChild(tabla);
    }
 /*  
    function iniMatrizMinas() {

        var matriz;
        for (var i = 0; i < filas; i++) {
            matriz[i] = [];
            for (var j = 0; j < columnas; j++) {
                matriz[i][j] = "0";
            }
        }

    }
   */
    
    function iniMatrizMinas(){
          for (var i=0;i<longitud;i++) {
        	    minas[i] = [];
        	}

        	// ponemos el valor de cada celda de la matriz
        	for (var i=0;i<longitud;i++) {
            	for (var j=0;j<longitud;j++) {
                	minas[i][j] = " ";    
            	}
        	}
        
    }


    function generadorBombas(minas) {
        var randFila = Math.floor((Math.random() * (filas - 1)) + 0);
        var randCol = Math.floor((Math.random() * (filas - 1)) + 0);
        alert(randFila);
        alert(randCol);
    }

    function mostrarNumero() {}



}
