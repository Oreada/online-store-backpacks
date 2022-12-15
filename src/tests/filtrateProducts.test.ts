import { filtrateProducts } from '../filters/filtrateProducts';
import { testCasesFiltrate } from './test-cases-filtrate';

describe('when called with array of products and array of filters', () => {
    it('returns the array filtered by given parameters', () => {
        testCasesFiltrate.forEach(({ productsArr, filtersArr, expected }) => {
            const result = filtrateProducts(productsArr, filtersArr);
            expect(result).toEqual(expected);
            // expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
        });
    });
});
