import data from '../src/data.js';

const getMovies = async () => {
    try {
        const res = await fetch(data.baseUrl);

        if (!res.ok) {
            throw new Error(`Failed to get movie with status : ${res.status}`);
        }

        const movies = await res.json();
        return movies;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getMovies;
