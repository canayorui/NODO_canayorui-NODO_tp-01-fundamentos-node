# NODO_tp-01-fundamentos-node
# Trabajo práctico 01
## Descripción
Proyecto que genera una ficha de videojuego y demuestra el orden del event loop.

## Cómo ejecutar
- `node index.js` o `node index.js <nombre>`
- `node orden-event-loop.js`

## Archivo generado
La ficha se guarda en `salida/ficha-videojuego.txt`.

## Conceptos
1. Diferencia entre JavaScript, V8 y Node.js.
   JavaScript es el lenguaje de programación. V8 es el motor que interpreta y ejecuta JavaScript. Node.js usa V8 y agrega APIs para trabajar fuera del navegador, por ejemplo con archivos y el sistema operativo.
2. Por qué el callback de `setTimeout(..., 0)` se ejecuta después del código principal.
   `setTimeout` programa el callback para que se ejecute más adelante; el valor `0` no significa que interrumpa inmediatamente el código en curso. Primero termina de ejecutarse el código síncrono y luego el event loop atiende el callback cuando corresponde.
3. Diferencia entre I/O bloqueante y no bloqueante.
   Una operación de I/O bloqueante detiene la ejecución hasta que termina. En una operación no bloqueante, el programa puede continuar con otras tareas y procesar el resultado cuando la operación finaliza.
4. Responsabilidades de `node:path` y `node:fs` en `index.js`.
   `node:path` permite construir y combinar rutas de forma compatible con el sistema operativo. `node:fs` permite interactuar con el sistema de archivos; en este programa crea la carpeta de salida y escribe la ficha.