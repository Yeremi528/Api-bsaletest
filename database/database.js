//Creamos constantes importando los modulos
const    mysql = require('mysql2');
const {promisify} = require('util')
//Ingresamos los datos para verificar si todo esta correcto

const pool = mysql.createPool({
  connectionLimit:10,
  host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user     : 'bsale_test',
  password : 'bsale_test',
  database : 'bsale_test',
  waitForConnections:true,
  connectionLimit:10,
});


//Ahora podemos hacer ASYNC con Querys
pool.query = promisify(pool.query)

//Exportamos el modulo
module.exports = pool

