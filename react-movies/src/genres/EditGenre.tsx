import { Link } from "react-router-dom";

export default function EditGenre() {
    return (
        <>
            <h3 className="text-center">Edit Genre</h3>
            <Link to="/genres/create" className="btn btn-primary">Edit Genre</Link>
        </>
    )
}