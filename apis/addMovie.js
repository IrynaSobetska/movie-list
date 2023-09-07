import data from '../src/data.js';

const addMovie = async (bodyData) => {
    try {
        const res = await fetch(data.baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bodyData)
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

export default addMovie;
