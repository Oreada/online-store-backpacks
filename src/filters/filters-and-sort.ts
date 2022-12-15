import { getData } from '../index';
import { filterProcessType, FilterI } from '../types/types';
import { setLocalStorage, getLocalStorage } from '../local-storage';
import { priceSlider, volumeSlider, storageSlider } from './sliders-range';

//! ========= filterPopular =========================================================================

export const filterPopular = document.querySelector('.filters__popular') as HTMLInputElement;

//! изменение значения чекбокса 'popular'
filterPopular.addEventListener('change', createFiltersArrayForFiltration);

//! ========== filterSearch =========================================================================

export const filterSearch = document.querySelector('.filters__search') as HTMLInputElement;

//! изменение значения поля поиска
// filterSearch.addEventListener('change', createFiltersArrayForFiltration);
filterSearch.addEventListener('input', createFiltersArrayForFiltration);

//! ========== filtersCheckbox ========================================================================

export const filtersCheckbox = document.querySelectorAll('.filters__checkbox') as NodeListOf<HTMLInputElement>;

//! изменение значений чекбоксов: 'color', 'brand'
filtersCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change', createFiltersArrayForFiltration);
});

//! =========== selectSorting and sortParameter ========================================================

export const selectSorting = document.querySelector('.select-sorting') as HTMLSelectElement;
selectSorting.value = getLocalStorage('sortParameter') || 'name-ascending'; // задаю сортировке значения из local storage
export let sortParameter = selectSorting.value;

//! изменение значений сортировки
selectSorting.addEventListener('change', function () {
    sortParameter = selectSorting.value;
    setLocalStorage('sortParameter', selectSorting.value);
    createFiltersArrayForFiltration();
});

//! =============================================================================================

export function createFiltersArrayForFiltration() {
    const curFilters: filterProcessType = {};
    filtersCheckbox.forEach((checkbox) => {
        if (checkbox.checked) {
            const key = checkbox.getAttribute('data-key') as string; // color, brand...
            const value = checkbox.getAttribute('data-value') as string;
            // eslint-disable-next-line no-prototype-builtins
            if (!curFilters.hasOwnProperty(key)) {
                curFilters[key] = {
                    type: 'include',
                    value: [],
                };
            }
            curFilters[key].value.push(value);
        }
    });
    const finalFilters: Array<FilterI> = [];
    for (const key in curFilters) {
        finalFilters.push({ key: key, type: curFilters[key].type, value: curFilters[key].value });
    }

    const rangeArrayPrice = priceSlider.noUiSlider?.get() as Array<number>;
    const rangeFromPrice = rangeArrayPrice[0];
    const rangeToPrice = rangeArrayPrice[1];
    finalFilters.push({ key: 'price', type: 'range', value: { from: rangeFromPrice, to: rangeToPrice } });

    const rangeArrayVolume = volumeSlider.noUiSlider?.get() as Array<number>;
    const rangeFromVolume = rangeArrayVolume[0];
    const rangeToVolume = rangeArrayVolume[1];
    finalFilters.push({ key: 'volume', type: 'range', value: { from: rangeFromVolume, to: rangeToVolume } });

    const rangeArrayStorage = storageSlider.noUiSlider?.get() as Array<number>;
    const rangeFromStorage = rangeArrayStorage[0];
    const rangeToStorage = rangeArrayStorage[1];
    finalFilters.push({ key: 'storage', type: 'range', value: { from: rangeFromStorage, to: rangeToStorage } });

    finalFilters.push({ key: 'popular', type: 'isPopular', value: filterPopular.checked ? 'yes' : 'all' });

    finalFilters.push({ key: 'name', type: 'search', value: filterSearch.value });

    // console.log(finalFilters);
    setLocalStorage('finalFilters', JSON.stringify(finalFilters));
    getData(finalFilters, sortParameter);
}
