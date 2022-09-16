export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">React Movie App</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/genres">
                                Genres
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/actors">
                                Actors
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movies">
                                Movies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movietheaters/filter">
                                Filter Movies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/genres">
                                Movie Theaters
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>)
}