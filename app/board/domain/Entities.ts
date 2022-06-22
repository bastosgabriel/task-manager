'use strict';

export class Board{
    id: string
    name: string
    lists: Array<List>

    constructor(args: {id: string, name: string, lists?: Array<List>}) {
        this.id = args.id
        this.name = args.name
        this.lists = args.lists !== undefined ? args.lists : []
    }

    addList(list: List): void {
        console.log('Adding list...')
        this.lists.push(list)
    }

    removeList(list: List): void {
        console.log('Removing list...')
        const index = this.lists.indexOf(list)
        if (index > -1) {
            this.lists.splice(index, 1)
        }
    }
}


export class List{
    id: string
    name: string
    cards: Array<Card>

    constructor(args: {id: string, name: string, cards?: Array<Card>}) {
        this.id = args.id
        this.name = args.name
        this.cards = args.cards !== undefined ? args.cards : []
    }

    addCard(card: Card): void {
        console.log('Adding card...')
        this.cards.push(card)
    }

    removeCard(card: Card): void {
        console.log('Removing card...')
        const index = this.cards.indexOf(card)
        if (index > -1) {
            this.cards.splice(index, 1)
        }
    }
}


export class Card{
    id: string
    title: string
    description: string

    constructor(args: {id: string, title: string, description?: string}) {
        this.id = args.id
        this.title = args.title
        this.description = args.description !== undefined ? args.description : ""
    }
}
