import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    let title = "Unexpected Error!!";
    let message = "Something went wrong";

    if (error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        title = "Not Found";
        message = "Could not find resource or page";
    }

    return (
        <>
            <div className="text-center m-10">
                <h1 className="font-bold">{title}</h1>
                <p>{message}</p>
            </div>
        </>
    )
}