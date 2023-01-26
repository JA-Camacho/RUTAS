const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//settings
app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Aplicacion para dar rutas a conocer a los estudiantes');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/admin', require('./routes/admin.routes'));
app.use('/api/estudiante', require('./routes/estudiante.routes'));
app.use('/api/ruta', require('./routes/ruta.routes'));


//Starting the server
app.listen(app.get('puerto'), () =>{
    console.log('Nombre de la App', app.get('nombreApp'));
    console.log('Puerto del servidor', app.get('puerto'));
})