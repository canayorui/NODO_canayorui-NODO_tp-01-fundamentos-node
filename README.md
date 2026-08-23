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
2. Por qué el callback de `setTimeout(..., 0)` se ejecuta después del código principal.
3. Diferencia entre I/O bloqueante y no bloqueante.
4. Responsabilidades de `node:path` y `node:fs` en `index.js`.