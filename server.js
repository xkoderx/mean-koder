//obtener las dependencias
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//creamos la aplicacion express y la configuramos
const app = express();

//Parser from POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Cfg. del directorio 'dist' como directorio estatico.
//en este directorio tendremos los archivos obtenidos en elbuild de nuestra app angular
app.use(express.static(path.join(__dirname,'dist')));

//Cfg. de las rutas
app.get('/api', (req, res) => {
    res.send('La API funciona');
    });
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//Cfg. del puerto de escucha
const port = process.env.PORT || '3000';
app.set('port', port);
//Creamos el servidor http con la aplicación express y abrimos el puerto
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on
    localhost:${port}`));