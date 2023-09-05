const createWarningMessage = (domData) => {
    const warning = document.createElement('p');
    warning.innerHTML = 'Please fill fields';
    warning.classList = 'warning';
    domData.append(warning);

    const removeMessage = () => {
        warning.remove();
    };

    setTimeout(removeMessage, 5 * 1000);
};

export default createWarningMessage;
