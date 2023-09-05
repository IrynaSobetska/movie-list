import data from '../data.js';
import dom from '../dom.js';

const editMovieHandler = async (movieId) => {
    dom.addBtn.innerText = 'Edit movie';
    data.movieId = movieId;
    data.editMovie = true;
};

export default editMovieHandler;
