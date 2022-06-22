import express from 'express'
import bodyParser from 'body-parser'
import { BoardInteractor } from '../domain/UseCases'


const boardRouter = express.Router()

boardRouter.get('/', (req, res) => {
    // TODO get board from repository
    res.send('Visualiza o board')
})

boardRouter.post('/', (req, res) => {
    const boardDTO = new BoardInteractor().createBoard(req.body.boardName)
    res.json({board: boardDTO})
})

// boardRouter.get('/myboard/:id', (req, res) => {
//     const id: number = +req.params.id
//     res.send(`Lê o item ${id}`)
// })

// boardRouter.put('/myboard/:id', (req, res) => {
//     const id: number = +req.params.id
//     res.send(`Atualiza o item ${id}`)
// })

boardRouter.delete('/', (req, res) => {
    res.send('Apaga o board')
    // const id: number = +req.params.id
    // res.send(`Apaga o item ${id}`)
})

export default boardRouter