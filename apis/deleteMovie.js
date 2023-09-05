import data from '../src/data.js';

const deleteMovie = async (movieId) => {
    try {
        const res = await fetch(`${data.baseUrl}/${movieId}`, {
            method: 'DELETE'
        });
        if (!res.ok) {
            throw new Error(
                `Failed to fetch movies with status : ${res.status}`
            );
        }
        return await res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default deleteMovie;
