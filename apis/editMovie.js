import data from '../src/data.js';

const editMovie = async (movieId, inputData) => {
    try {
        const res = await fetch(`${data.baseUrl}/${movieId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(inputData)
        });
        if (!res.ok) {
            throw new Error(
                `Failed to fetch movies with status : ${res.status}`
            );
        }
        return await res.json(inputData);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default editMovie;
