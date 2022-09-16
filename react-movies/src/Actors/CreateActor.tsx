import { Link } from 'react-router-dom';

export default function CreateActor() {
    return (
        <>
            <h3 className="text-center">Create Actor</h3>
            <Link className="btn btn-primary" to="actors/create">Create Actor</Link>
        </>
    )
}