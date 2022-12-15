import { setLocalStorage, getLocalStorage } from '../local-storage';

const mockLS = {
    name: 'display',
    value: 'ten per page',
};

describe('when called', () => {
    setLocalStorage(mockLS.name, mockLS.value);

    it('should set pairs name-value', () => {
        expect(localStorage.getItem(mockLS.name)).toEqual(mockLS.value);
    });
});

describe('when called', () => {
    it('should return the value by name', () => {
        const result = getLocalStorage('wrongName');
        const expected = '0';
        expect(result).toEqual(expected);
    });
});
