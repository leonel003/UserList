const mongoose= require('mongoose');

const URI=process.env.DB_URI ? 
process.env.DB_URI: 'mongodb://localhost/testUser';

mongoose.connect(URI, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection= mongoose.connection;
connection.once('open',()=>{
    console.log('db is connected');
});