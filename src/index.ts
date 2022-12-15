//* TODO: СДЕЛАТЬ ХРАНИЛИЩЕ (enum?) ДЛЯ 1) type: 'include', type: 'range' И Т.Д. 2) ПАРАМЕТРОВ СОРТИРОВКИ
//* TODO: СДЕЛАТЬ КНОПКУ "ПОИСК" ДЛЯ ФИЛЬТРА ПОИСКА, УБРАТЬ СОБЫТИЕ 'input' С filterSearch, НАВЕСИТЬ СОБЫТИЕ НА КНОПКУ

import './scss/style.scss';
import { FilterI } from './types/types';
import { getLocalStorage } from './local-storage';
import { PRODUCTS_SOURCE } from './constants/constants';
import { clearElement } from './clearElement';
import { loadFiltersArrayForFiltration } from './filters/loadFiltersArrayForFiltration';
import { sortParameter } from './filters/filters-and-sort';
import './reset-buttons';
import './filters/sliders-range';
import './filters/filters-and-sort';
import { sortProducts } from './filters/sortProducts';
import { filtrateProducts } from './filters/filtrateProducts';
import { drawCards } from './drawCards';

//! ==================================================================================================

const filtersInit: Array<FilterI> = JSON.parse(getLocalStorage('finalFilters')) || [];
loadFiltersArrayForFiltration(filtersInit); // задаю фильтрам значения из local storage
getData(filtersInit, sortParameter);

//! ==================================================================================================

export async function getData(filters: Array<FilterI>, sortParameter = 'name-ascending') {
    const response = await fetch(PRODUCTS_SOURCE);
    let products = await response.json();
    // console.log(products); // массив объектов-товаров

    products = filtrateProducts(products, filters); //! ФИЛЬТРАЦИЯ
    // console.log(products); // массив объектов-товаров, соответствующих выбранным фильтрам

    if (products.length > 0) {
        products = sortProducts(products, sortParameter); //! СОРТИРОВКА
        drawCards(products);
    } else {
        clearElement('.store__list'); // очистка товаров, соответствующих предыдущим фильтрам
        (document.querySelector('.store__alert') as HTMLElement).textContent =
            'There is no products with given parameters';
    }
}

//! ==================================================================================================

console.log(`
All requirements are fulfilled:
1. Главная страница содержит все товары магазина а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10
2. Карточка товара содержит его изображение, название, количество данного товара на складе, год выхода на рынок, цвет, производитель и т.д., находится ли товар в корзине +10
3. Добавление товаров в корзину +20
4. Сортировка +20
5. Фильтры в указанном диапазоне от и до +30
6. Фильтры по значению +30
7. Можно отфильтровать товары по нескольким фильтрам разного типа +20
8. Сброс фильтров +20
9. Сохранение настроек в local storage +30
10. Поиск +30
Total: 220
`);
