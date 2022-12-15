import { basket, basketAmount } from './basket';
import { createFiltersArrayForFiltration } from './filters/filters-and-sort';
import { setLocalStorage } from './local-storage';
import { priceSlider, volumeSlider, storageSlider } from './filters/sliders-range';
import { filterPopular, filterSearch, filtersCheckbox, selectSorting } from './filters/filters-and-sort';

const resetOnlyFiltersButton = document.querySelector('.reset__filters') as HTMLButtonElement;
const resetAllSettingsButton = document.querySelector('.reset__settings') as HTMLButtonElement;

resetOnlyFiltersButton.addEventListener('click', resetOnlyFilters);
resetAllSettingsButton.addEventListener('click', resetAllSettings);

function _reset() {
    filtersCheckbox.forEach((checkbox) => (checkbox.checked = false));
    filterPopular.checked = false;
    priceSlider.noUiSlider?.reset();
    volumeSlider.noUiSlider?.reset();
    storageSlider.noUiSlider?.reset();
    filterSearch.value = '';
}

function resetOnlyFilters() {
    _reset();
    createFiltersArrayForFiltration();
}

function resetAllSettings() {
    _reset();
    selectSorting.value = 'name-ascending';
    setLocalStorage('sortParameter', 'name-ascending');
    basket.clearBasket();
    basketAmount.textContent = basket.getAmount();
    createFiltersArrayForFiltration();
}
