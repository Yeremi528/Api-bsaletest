//Creamos constantes importando los modulos
const express = require('express')
const cors = require('cors')
//Creamos una constante igual a express inicializado
const app = express();


//Establecer el puerto
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors())
//Routes 
app.use('/', require('./routes/index'));


app.use(express.json())
//Empezar el servidor

try{
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });
}catch(err){
  console.log(err,'Error al inicializar el servidor')
}
