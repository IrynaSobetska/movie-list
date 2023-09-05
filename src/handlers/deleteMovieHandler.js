import deleteMovie from '../../apis/deleteMovie.js';

const deleteMovieHandler = async (movieId) => {
    await deleteMovie(movieId);
};

export default deleteMovieHandler;
