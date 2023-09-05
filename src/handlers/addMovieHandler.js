import data from '../data.js';
import dom from '../dom.js';
import createWarningMessage from '../components/createWarningMessage.js';
import addMovie from '../../apis/addMovie.js';
import editMovie from '../../apis/editMovie.js';

const addMovieHandler = async () => {
    const createWarningMessageExist = document.querySelector('.warning');

    if (data.editMovie === true) {
        let titleData = {};
        const titleValue = dom.title.value;
        const srcValue = dom.src.value;
        if (titleValue.length <= 0 && srcValue.length <= 0) {
            if (createWarningMessageExist) {
                return;
            }
            createWarningMessage(dom.warningContainer);
            return;
        } else if (titleValue.length > 0 && srcValue.length > 0) {
            titleData = {
                title: titleValue,
                src: srcValue
            };
        } else if (titleValue.length > 0 && srcValue.length <= 0) {
            titleData = {
                title: titleValue
            };
        } else if (titleValue.length <= 0 && srcValue.length > 0) {
            titleData = {
                src: srcValue
            };
        }
        const movieId = data.movieId;

        await editMovie(movieId, titleData);

        data.editMovie = false;
        dom.addBtn.textContent = 'Add movie';
    } else {
        const titleValue = dom.title.value;
        const srcValue = dom.src.value;
        if (titleValue.length <= 0 || srcValue.length <= 0) {
            if (createWarningMessageExist) {
                return;
            }
            createWarningMessage(dom.warningContainer);
            return;
        }
        await addMovie();
    }
};

export default addMovieHandler;
