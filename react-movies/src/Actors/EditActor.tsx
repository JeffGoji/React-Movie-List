import { Link } from "react-router-dom";

export default function EditActor() {
    return (
        <>
            <h3 className="text-center">Edit Actor</h3>
            <Link to="/genres/create" className="btn btn-primary">Edit Actor</Link>
        </>
    )
}