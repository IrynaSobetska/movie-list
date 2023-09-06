import deleteMovie from '../../apis/deleteMovie.js';

const deleteMovieHandler = async (movieId) => {
    document.getElementById(movieId).remove();

    await deleteMovie(movieId);
};

export default deleteMovieHandler;
