import { useRouteError } from 'react-router-dom'
import { obj } from '../Types/Types';

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
