'use strict';

const express = require('express');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/',function(req,res){
    res.json({message:'Hello World!!'});
});

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(0);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
