import { Link } from 'react-router-dom';

export default function Actors() {
    return (
        <>
            <h3 className="text-center">Actors</h3>
            <Link className="btn btn-primary" to="actors/create">Create Actor</Link>
        </>
    )
}