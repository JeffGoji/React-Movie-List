import React from "react";
import { useEffect, useState } from "react"
import { landingPageDTO, } from './movies/movies.model'
import MoviesList from "./movies/MoviesList";
import Button from "./utils/Button";

function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [{
          id: 0,
          title: 'Star Trek Beyond',
          poster: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Star_Trek_Beyond_poster.jpg'
        },
        {
          id: 1,
          title: 'Godzilla Vs Kong',
          poster: 'https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.png'
        }],
        upcomingReleases: [
          {
            id: 2,
            title: "Ford v Ferrari",
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png/220px-Ford_v._Ferrari_%282019_film_poster%29.png'

          }
        ]
      })
    }, 2000);

    return () => clearTimeout(timerId);

  })


  return (
    <div className="container-lg">
      <h3 className="text-center">In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3 className="text-center">Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />

      <br />
      <Button>Whatever Text</Button>
    </div>);
}

export default App;
