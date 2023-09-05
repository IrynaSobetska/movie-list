import dom from '../dom.js';

import getMovies from '../../apis/getMovies.js';
import createMovie from '../components/createMovie.js';

const loadHandler = async () => {
    const movies = await getMovies();

    const reverseMovies = movies.reverse();

    reverseMovies.forEach((movie) => {
        const domEl = createMovie(movie);
        dom.container.append(domEl);
    });
};

export default loadHandler;
