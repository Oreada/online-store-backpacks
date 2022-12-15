function setLocalStorage(name: string, value: string) {
    localStorage.setItem(name, value);
}

function getLocalStorage(name: string, defaultValue = '0') {
    return localStorage.getItem(name) || defaultValue;
}

export { setLocalStorage, getLocalStorage };
