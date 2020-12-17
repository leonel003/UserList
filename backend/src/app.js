const express= require('express');
const cors= require('cors');
const app= express();

//settings
app.set('port',process.env.PORT || 4000);
//middlewares
app.use(cors());
app.use(express.json());
//routes

/*app.get('/', (req,res)=>{ 
    res.send("hola");
});*/
app.use(require('./rutes'));


module.exports= app;