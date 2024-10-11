import { FC } from 'react';
import { useRouteError } from 'react-router-dom'

type obj = {
    data: string,
    error: {
        message: string,
        stack: string
    },
    internal: boolean,
    status: number,
    statusText: string
}

export default function ErrorPage() {
    const error: obj = useRouteError();
    return (
        <div>
            <h1>Error page</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText}   {error.error.message}</i>
            </p>
        </div>
    )
}
