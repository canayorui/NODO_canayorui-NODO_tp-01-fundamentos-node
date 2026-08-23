const fs = require("fs"); //
const path = require("path");

const args = process.argv.silece(2);
const estudiante = args[0] || "estudiante anonimo";

console.log("version de node.js:", process.version);
console.log ("plataforma de sistema:", process.plataforma);

const videojuego = {
    titulo:"the legend of zelda: breath of the wild",
    estudio: "nintendo",
    anio:2017,
    plataformas: ["nintendo switch","wii U"],
    multijugador: false,
};

const plataformasTexto = videojuego.plaformas.join(", ");
const multijugadorTexto = videojuego.multijugador? "si": "no";

const ficha = `
FICHA DE VIDEOJUEGO
Estudiante: ${estudiante}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}

Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${multijugadorTexto}
`;

const carpetaSalida = path.join(__dirname, "salida");
fs.mkdirSync(carpetaSalida, { recursive: true });

const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");
fs.writeFileSync(rutaArchivo, ficha, "utf8");


console.log(ficha);
console.log("Archivo generado en:", rutaArchivo);