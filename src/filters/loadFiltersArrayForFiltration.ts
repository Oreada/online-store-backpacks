import { RangeFilterI, FilterI } from '../types/types';
import { priceSlider, volumeSlider, storageSlider, setValueToNouislider } from './sliders-range';
import { filterPopular, filterSearch, filtersCheckbox } from './filters-and-sort';

export function loadFiltersArrayForFiltration(filters: Array<FilterI>) {
    filters.forEach((filter: FilterI) => {
        // console.log(filter);
        if (filter.type === 'include') {
            filtersCheckbox.forEach((checkbox) => {
                const key = checkbox.getAttribute('data-key') as string; // color, brand...
                const value = checkbox.getAttribute('data-value') as string;
                if (filter.key === key && (filter.value as Array<string>).includes(value)) {
                    checkbox.setAttribute('checked', 'checked');
                }
            });
        } else if (filter.type === 'range') {
            if (filter.key === 'price') {
                setValueToNouislider(priceSlider, filter.value as RangeFilterI);
            } else if (filter.key === 'volume') {
                setValueToNouislider(volumeSlider, filter.value as RangeFilterI);
            } else if (filter.key === 'storage') {
                setValueToNouislider(storageSlider, filter.value as RangeFilterI);
            }
        } else if (filter.type === 'isPopular') {
            if (filter.value === 'yes') {
                filterPopular.setAttribute('checked', 'checked');
            }
        } else if (filter.type === 'search') {
            filterSearch.value = filter.value as string;
        }
    });
}
