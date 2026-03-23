const mysql = require('mysql2') ;
const db = mysql.createConnection({
             host : 'localhost' , 
             user : 'root' ,
             password : 'ouimoi2006' , 
             database : 'blog_db' 
 }) ;
 db.connect((err)=>{
         if (err) {
           console.error('Erreur de connexion a MySQL :' , err );
           return ;
         }
         console.log('connecte a la base de donnees blog_db') ;
 }) ;
 module.exports = db ;                      
