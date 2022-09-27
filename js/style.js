//::::::: Juego Adivina el Número Secreto :::::::


let opcion = prompt(":::: ADIVINA EL NUMERO SECRETO ::::\n Elegí una opción: \n1- Para facil. \n2 - Para medio. \n3 - Para dificil. \n Presioná X para salir.");
    
let nSecreto = "3";

while (opcion != 'X' && opcion != 'x') {

    switch (opcion) {

        case '1':
            for (let i = 2; i >= 0; i--) {
                let nUser = prompt(":::: ADIVINA EL NUMERO SECRETO ::::\n Ingresa un número del 1 al 10.\n Elegiste la opción Facil tenes " + (i + 1) + " oportunidades.");
            
            
                    if (nUser === nSecreto) {
                        alert("Muy Bien GANASTE !!!!\n ese es el número secreto.");
                            break;
                        
            }       else if (nUser > nSecreto && i > 0) {
                        alert("Error el número ingresado es mayor al número secreto.\n Te quedan " + i + " intentos.");
            }       else if (nUser < nSecreto && i > 0) {
                        alert("Error el número ingresado es menor al número secreto.\n Te quedan " + i + " intentos.");
            }       else {
                        alert("Lo lamento PERDISTE !!! \n vuelve a intentarlo mas tarde.");
                            break;

            }
            } break;

        case '2':
            for (let i = 1; i >= 0; i--) {
                let nUser = prompt(":::: ADIVINA EL NUMERO SECRETO ::::\n Ingresa un número del 1 al 10.\n Elegiste la opción Media tenes " + (i + 1) + " oportunidades.");
            
            
                    if (nUser === nSecreto) {
                        alert("Muy Bien GANASTE !!!!\n ese es el número secreto.");
                            break;
            }       else if (nUser > nSecreto && i > 0) {
                        alert("Error el número ingresado es mayor al número secreto.\n Te quedan " + i + " intentos.");
            }       else if (nUser < nSecreto && i > 0) {
                        alert("Error el número ingresado es menor al número secreto.\n Te quedan " + i + " intentos.");
            }       else {
                        alert("Lo lamento PERDISTE !!! \n vuelve a intentarlo mas tarde.");
                            break;
            }
            } break;
            

        case '3':
            for (let i = 0; i >= 0; i--) {
                let nUser = prompt(":::: ADIVINA EL NUMERO SECRETO ::::\n Ingresa un número del 1 al 10.\n Elegiste la opción Dificil tenes " + (i + 1) + " oportunidad.");
            
            
                    if (nUser === nSecreto) {
                        alert("Muy Bien GANASTE !!!!\n ese es el número secreto.");
                            break;
            }       else if (nUser > nSecreto && i > 0) {
                        alert("Error el número ingresado es mayor al número secreto.\n Te quedan " + i + " intentos.");
            }       else if (nUser < nSecreto && i > 0) {
                        alert("Error el número ingresado es menor al número secreto.\n Te quedan " + i + " intentos.");
            }       else {
                        alert("Lo lamento PERDISTE !!! \n vuelve a intentarlo mas tarde.");
                            break;
            }
            } break;          

    }
                        alert("Hasta pronto.")
                        break;

    }

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::