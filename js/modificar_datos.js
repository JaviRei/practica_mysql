//Libreria necesaria para utilizar los modulos de mysql
const mysql = require("mysql");



// Con esye metodo conectare con mi base de datos
let conexion = mysql.createConnection({
    host:'localhost',
    database: 'practica_db',
    user:'root',
    password:""
});


const modificar = "UPDATE users SET last_name = 'Reyes' WHERE user_id = 1";

conexion.query(modificar,(error) => {
    if(error){
        throw error;
    }
    else{
        console.log('Propiedad Modificada')
    }
})

conexion.end();
