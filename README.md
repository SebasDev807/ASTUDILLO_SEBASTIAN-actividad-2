Ejercicio 1: Contador de clics en un botón
👉 Situación real: Quieres medir cuántas veces alguien ha presionado un botón en tu web.

Crea un componente llamado ClickCounter.
Define una variable de estado count inicializada en 0.
Crea un botón que aumente el valor de count en 1 cada vez que se presione.
Usa un useEffect que imprima en consola el número actual de clics cada vez que cambie count.
Muestra en pantalla el número de clics acumulados.
Ejercicio 2: Mostrar/ocultar detalles de un producto
👉 Situación real: En una tienda online, al presionar un botón se muestran los detalles de un producto.

Crea un componente ProductDetails.
Crea una variable de estado showDetails de tipo boolean.
Agrega un botón que cambie entre "Ver detalles" y "Ocultar detalles".
Si showDetails es true, muestra en pantalla una lista con nombre, precio y descripción de un producto.
Usa useEffect para imprimir en consola un mensaje cada vez que se muestre u oculte la información.
Ejercicio 3: Campo de búsqueda en vivo
👉 Situación real: Mientras el usuario escribe en una caja de búsqueda, se actualiza lo que aparece en pantalla.

Crea un componente SearchBox.
Define una variable de estado query con valor inicial "".
Crea un input que actualice query cada vez que el usuario escriba.
Muestra debajo el texto "Buscando: {query}".
Usa un useEffect que imprima en consola el valor de query cada vez que cambie.
