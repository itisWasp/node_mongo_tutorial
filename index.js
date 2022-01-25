const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.connect("mongodb://localhost:27017/test",  { useNewUrlParser: true }).then(() =>{
    const app = express();
    app.use(express.json());
    app.use('/api', routes)

    app.listen(5009, ()=> {
    console.log('Server Started');
});
});