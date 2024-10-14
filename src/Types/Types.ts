export type itemArray = Array<
    {
        brand: string,
        name: string,
        url: string,
        keyId: number,
        price: number,
        volume: string,
    }>

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
