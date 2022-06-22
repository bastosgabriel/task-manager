export class BoardDTO {
    id: string
    name: string
    lists?: Array<ListDTO>

    constructor(args: {id: string, name: string, lists?: Array<ListDTO>}) {
        this.id = args.id
        this.name = args.name
        this.lists = args.lists !== undefined ? args.lists : []
    }
}


export class ListDTO {
    id: string
    name: string
    cards?: Array<CardDTO>

    constructor(args: {id: string, name: string, cards?: Array<CardDTO>}) {
        this.id = args.id
        this.name = args.name
        this.cards = args.cards !== undefined ? args.cards : []
    }
}



export class CardDTO {
    id: string
    title: string
    description?: string

    constructor(args: {id: string, title: string, description?: string}) {
        this.id = args.id
        this.title = args.title
        this.description = args.description !== undefined ? args.description : ""
    }
}

