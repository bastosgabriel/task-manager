export type BoardModel = {
    id: string
    name: string
    lists: Array<ListModel>
}

export type ListModel = {
    id: string
    name: string
    cards: Array<CardModel>
}

export type CardModel = {
    id: string
    title: string
    description: string
}