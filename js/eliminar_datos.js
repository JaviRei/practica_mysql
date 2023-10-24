//Libreria necesaria para utilizar los modulos de mysql
const mysql = require("mysql");





// Con esye metodo conectare con mi base de datos
let conexion = mysql.createConnection({
    host:'localhost',
    database: 'practica_db',
    user:'root',
    password:""
});

const eliminar = "DELETE FROM users WHERE user_id = "

conexion.query(eliminar,(error,rows) => {
    if(error){
        throw Error;
    }
    else{
        console.log('Propiedad eliminada')
        console.log(rows)
    }
})

conexion.end()