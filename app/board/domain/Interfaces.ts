'use strict';


export interface IBoardRepository {
    nextId(): string
    create(): string
    delete(): void
}
