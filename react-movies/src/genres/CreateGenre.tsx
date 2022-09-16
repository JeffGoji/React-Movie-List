import { Link } from "react-router-dom";

export default function CreateGenre() {
    return (
        <>
            <h3 className="text-center">Create Genre</h3>
            <Link to="/genres/create" className="btn btn-primary">Create Genre</Link>
        </>
    )
}