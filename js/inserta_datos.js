//Libreria necesaria para utilizar los modulos de mysql
const mysql = require("mysql");





// Con esye metodo conectare con mi base de datos
let conexion = mysql.createConnection({
    host:'localhost',
    database: 'practica_db',
    user:'root',
    password:""
});

//INYECTAR DATOS A LA BASE DE DATOS

const nuevoRegistro = "INSERT INTO users (user_id, user_handle, user_email, first_name, last_name, phone_number, created_at) VALUES (NULL, 'Galaxirya', 'galaga@gmail.com', 'Orlando', 'Jimenez','36589741', current_timestamp())";

conexion.query(nuevoRegistro,(error,rows) => {
    if(error){
        throw error;
    }
    else{
        console.log('Datos ingresados');
        console.log(rows)
    }
});


conexion.end()