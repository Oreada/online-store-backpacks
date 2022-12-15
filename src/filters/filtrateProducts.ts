import { ProductType, FilterI, RangeFilterI } from '../types/types';

export function filtrateProducts(productsArray: Array<ProductType>, filtersArray: Array<FilterI>) {
    productsArray = productsArray.filter((product: ProductType) => {
        let passed = true;
        for (const obj of filtersArray) {
            if (obj.type === 'include') {
                //! 'color', 'brand'
                if (Object.keys(product).includes(obj.key)) {
                    const value = obj.value as Array<string>;
                    passed = passed && value.includes(product[obj.key].toLowerCase());
                } else {
                    throw new Error('Product does not have such property for filtration');
                }
            } else if (obj.type === 'range') {
                //! 'storage', 'volume', 'price'[, 'weight']
                const value = obj.value as RangeFilterI;
                const fromRange = value.from;
                const toRange = value.to;
                passed = passed && Number(product[obj.key]) >= fromRange && Number(product[obj.key]) <= toRange;
            } else if (obj.type === 'search') {
                //! by name (the chunk of word in the name)
                const value = obj.value as string;
                const strForSeach = product.name.toLowerCase();
                passed = passed && strForSeach.includes(value.toLowerCase());
            } else if (obj.type === 'isPopular') {
                //! 'popular'
                const value = obj.value as string;
                if (value === 'yes') {
                    passed = passed && product.popular === value;
                }
            }
        }
        return passed;
    });
    return productsArray;
}
