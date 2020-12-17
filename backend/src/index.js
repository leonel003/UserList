require('dotenv').config();
const app= require('./app');
require('./dbConnection');

const port=app.get('port');
app.listen(port,()=>{console.log("hola"+ port);});