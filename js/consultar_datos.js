
//Libreria necesaria para utilizar los modulos de mysql
const mysql = require("mysql");


// Con esye metodo conectare con mi base de datos
let conexion = mysql.createConnection({
    host:'localhost',
    database: 'practica_db',
    user:'root',
    password:""
});


//Metodo para revisar si mi base de datos esta activa y bien vinculada
conexion.connect((err) => {
   if(err){
    throw err;
   }
   else{
    console.log('Conexión exitosa')
   }
})


//    HACER CONSULTAS DE UNA DB
//Creas una variable con la que mandas a llamar a la tbla users
//SELECT selecciona  * Todo FROM de Users
const users = 'SELECT * FROM users';

//Con la variable de la base se cra una función query en la tabla users
//La cual solicita dos parametros erros & lista
//error por si cacha erroes los lance con trhow 
//lista en caso de que no haya errores los enlista
conexion.query(users,(error,lista) => {
    if(error){
        throw error;
    }
    else{
        console.log(lista)
        console.log('Solamente hay ',lista.length,' registros')
        console.log(lista[0])
        console.log(lista[1].first_name)
    }
})

//de esta forma terminamos la conexión con la base de datos
conexion.end();