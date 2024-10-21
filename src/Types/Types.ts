export type itemArray = Array<
    {
        brand: string,
        name: string,
        url: string,
        keyId: number,
        price: number,
        volume: string,
    }>

export type item = {
    brand: string,
    name: string,
    url: string,
    price: number,
    volume: string,
    keyId?: number,
    amount?: number,
}

export type eventType = {
    eventType: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

export type obj = {
    data: string,
    error: {
        message: string,
        stack: string
    },
    internal: boolean,
    status: number,
    statusText: string
}
