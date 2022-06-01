# Code Engine Demos
Repositorio creado con el fin de almacenar el código de las aplicaciones de demo de IBM Cloud Code Engine. Ya que el repositorio es público, cualquiera que quiera experimentar con las aplicaciones es bienvenido.

    Prepared by: Sebastián Fripp
    26/05/2022

<hr>

## Contenido

- [Code Engine Demos](#code-engine-demos)
  - [Contenido](#contenido)
  - [Demos disponibles](#demos-disponibles)

## Demos disponibles
Actualmente las aplicaciones de demo disponibles en el repositorio son las siguientes:

- [print-time](./print-time/)
  - Job que se encarga de imprimir por consola la fecha y hora actual. Se puede vincular a un evento periódico de forma que se creen instancias de forma automática.
- [hello-world](./hello-world/)
  - Aplicación que imprime "Hello ${person}", por default "Hello world", pero cambiando la variable de entorno puede imprimir lo que le indiquemos.
- [weather-app](./weather-app/)
  - Aplicación que dado una ubicación en el mundo, devuelve el clima actual en dicho lugar. A modo de ejemplo de como podríamos obtener un endpoint para visitar nuestra página desde donde deseemos.

Cada una de ellas contiene un archivo *README.md* el cuál contiene instrucciones de como utilizar la app o job y como hacer el despliegue en IBM Cloud Code Engine.