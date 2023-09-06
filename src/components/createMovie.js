import editMovieHandler from '../handlers/editMovieHandler.js';
import deleteMovieHandler from '../handlers/deleteMovieHandler.js';

const createMovie = (movieData) => {
    const id = movieData.id;
    const container = document.createElement('div');
    container.classList.add('movie-box');
    container.id = movieData.id;

    const title = document.createElement('h3');
    title.innerText = movieData.title;

    const img = document.createElement('img');
    img.src = movieData.src;
    img.alt = movieData.title;

    const editBtn = document.createElement('button');
    editBtn.classList = 'edit';
    editBtn.innerText = 'Edit';
    editBtn.id = movieData.id;
    editBtn.addEventListener('click', () => {
        container.classList.add('selected');
        editMovieHandler(id);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteMovieHandler(id);
    });

    const btnBox = document.createElement('div');
    btnBox.classList = 'btn-box';
    btnBox.append(editBtn, deleteBtn);

    container.append(title, img, btnBox);

    return container;
};

export default createMovie;
