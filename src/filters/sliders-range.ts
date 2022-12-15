import * as noUiSlider from 'nouislider';
import { createFiltersArrayForFiltration } from './filters-and-sort';
import { RangeFilterI } from '../types/types';

function createNouislider(slider: noUiSlider.target, minValue: number, maxValue: number, stepValue: number) {
    noUiSlider.create(slider, {
        range: {
            min: minValue,
            max: maxValue,
        },
        start: [minValue, maxValue],
        step: stepValue,
        connect: true,
        tooltips: true,
        format: {
            to: function (value: number) {
                return parseInt(String(value));
            },
            from: function (value) {
                return parseInt(String(value));
            },
        },
    });

    //! изменение значений ползунка
    slider.noUiSlider?.on('change', createFiltersArrayForFiltration);
}

export function setValueToNouislider(slider: noUiSlider.target, value: RangeFilterI) {
    const rangeValue = value;
    const fromRange = rangeValue.from;
    const toRange = rangeValue.to;
    slider.noUiSlider?.set([fromRange, toRange]);
}

export const priceSlider = document.querySelector('.filters__range_price') as noUiSlider.target;
export const volumeSlider = document.querySelector('.filters__range_volume') as noUiSlider.target;
export const storageSlider = document.querySelector('.filters__range_storage') as noUiSlider.target;

createNouislider(priceSlider, 800, 6000, 10);
createNouislider(volumeSlider, 5, 100, 1);
createNouislider(storageSlider, 1, 10, 1);
