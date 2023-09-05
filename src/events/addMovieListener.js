import dom from '../dom.js';
import addMovieHandler from '../handlers/addMovieHandler.js';

const addMovieListener = () => {
    dom.addBtn.addEventListener('click', addMovieHandler);
};

export default addMovieListener;
