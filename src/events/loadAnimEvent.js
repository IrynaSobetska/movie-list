import loadAnimHandler from '../handlers/loadAnimHandler.js';

const loadAnimEvent = () => {
    window.addEventListener('load', loadAnimHandler);
};

export default loadAnimEvent;
