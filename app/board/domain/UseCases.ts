import { Board} from "./Entities";
import { BoardDTO} from "./Data";
import { IBoardRepository } from "./Interfaces";
import { MongoBoardRepository } from "../database/Repositories"

export class BoardInteractor{
    readonly _repository: IBoardRepository

    constructor(repository: IBoardRepository = new MongoBoardRepository()) {
        this._repository = repository
    }

    createBoard(boardName: string): BoardDTO {
        console.log("UseCase createBoard")
        const boardId = this._repository.create()
        // const boardId = this._repository.nextId()
        // const board = new Board({
        //     id: boardId,
        //     name: boardName,
        // })

        const boardDTO = new BoardDTO({
            id: boardId,
            name: boardName
        })

        return boardDTO
    }

    // deleteBoard(id: string): void {
    //     console.log('Deleting board...') // TODO remove
    //     //
    // }

    // addList(board: BoardDTO, list: List): void {
    //     // board.addList(list)
    // }

    // removeList(board: Board, list: List): void {
    // //     board.removeList(list)
    // }

    // reorderLists(board: Board, list: List): void {
    // //     // TODO
    // }
}
