"use strict";
const button = document.querySelector('.js-button-calculate');
const getToPixelValues = (valuePixels, valueRoot) => {
    const result = valuePixels / valueRoot;
    return result;
};
const getValuesToInputPixels = () => {
    const rootInput = document.querySelector('#js-input-root');
    const pixelsInput = document.querySelector('#js-input-pixels');
    const rootInputValue = Number(rootInput.value);
    const pixelsInputValue = Number(pixelsInput.value);
    return getToPixelValues(pixelsInputValue, rootInputValue);
};
const resultValueREM = () => {
    const remInput = document.querySelector('#js-input-rem');
    remInput.value = getValuesToInputPixels().toString();
};
button.addEventListener('click', resultValueREM);
