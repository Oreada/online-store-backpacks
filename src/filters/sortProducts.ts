import { ProductType } from '../types/types';

export function sortProducts(productsArray: Array<ProductType>, parameter: string) {
    if (parameter === 'name-ascending') {
        productsArray.sort((objA, objB) => (objA.name > objB.name ? 1 : -1));
    } else if (parameter === 'name-descending') {
        productsArray.sort((objA, objB) => (objB.name > objA.name ? 1 : -1));
    } else if (parameter === 'price-ascending') {
        productsArray.sort((objA, objB) => Number(objA.price) - Number(objB.price));
    } else if (parameter === 'price-descending') {
        productsArray.sort((objA, objB) => Number(objB.price) - Number(objA.price));
    } else if (parameter === 'storage-ascending') {
        productsArray.sort((objA, objB) => Number(objA.storage) - Number(objB.storage));
    } else if (parameter === 'storage-descending') {
        productsArray.sort((objA, objB) => Number(objB.storage) - Number(objA.storage));
    } else if (parameter === 'volume-ascending') {
        productsArray.sort((objA, objB) => Number(objA.volume) - Number(objB.volume));
    } else if (parameter === 'volume-descending') {
        productsArray.sort((objA, objB) => Number(objB.volume) - Number(objA.volume));
    }
    return productsArray;
}
