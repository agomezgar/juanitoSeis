const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js', // Ruta al punto de entrada de tu aplicación
  target: 'electron-main', // Especifica que es una aplicación Electron
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.js', // Nombre del archivo bundle
  },
  externals: [nodeExternals()], // Excluye las dependencias de Node.js del bundle
};
