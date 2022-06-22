import bodyParser from 'body-parser'
import express from 'express'
import boardRouter from '../../board/web/Controllers'

const PORT = process.env.PORT || 8080
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
const app = express()

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(0);
})


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/myboard', boardRouter)

app.get('/', function(req,res) {
    res.json({message:'Hi, lets create your first board'});
})

app.listen(PORT, () => {
    console.log(`Running on http://${HOSTNAME}:${PORT}`)
})

