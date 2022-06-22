'use strict';

import { IBoardRepository } from "../domain/Interfaces";


export class MongoBoardRepository implements IBoardRepository {
    nextId(): string {
        console.log("Generating next id")
        return "1"
    }
    create(): string {
        console.log("Saving board to MongoDB")
        return "1"
    }

    delete(): void {
        console.log("Deleting board to MongoDB")
    }
}
