import loadEvent from './events/loadEvent.js';
import addMovieListener from './events/addMovieListener.js';

loadEvent();
addMovieListener();

// JavaScript to show/hide loading animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    // Hide the loading animation
    loading.style.display = 'none';

    // Show the website content
    content.style.display = 'block';
});
