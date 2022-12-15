import { sortProducts } from '../filters/sortProducts';
import { testCasesSort } from './test-cases-sort';

it('returns the result of dividing the first by the second', () => {
    testCasesSort.forEach(({ arr, parameter, expected }) => {
        const result = sortProducts(arr, parameter);
        expect(result).toEqual(expected);
    });
});
