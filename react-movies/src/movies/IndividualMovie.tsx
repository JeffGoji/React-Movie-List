import { movieDTO } from "./movies.model";
import css from './IndividualMovie.module.css'

export default function IndividualMovie(props: movieDTO) {

    const buildLink = () => `/movie/${props.id}`;

    return (
        <div className={css.div}>
            <a href={buildLink()}>
                <img alt="Poster" src={props.poster} />
            </a>
            <a href={buildLink()}><p>{props.title}</p></a>
        </div>
    );
}
