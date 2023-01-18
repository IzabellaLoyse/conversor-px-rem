const button: HTMLButtonElement = document.querySelector(
  '.js-button-calculate',
) as HTMLButtonElement;

const getToPixelValues = (valuePixels: number, valueRoot: number) => {
  const result = valuePixels / valueRoot;
  return result;
};

const getValuesToInputPixels = () => {
  const rootInput: HTMLInputElement = document.querySelector(
    '.js-input-root',
  ) as HTMLInputElement;
  const pixelsInput: HTMLInputElement = document.querySelector(
    '.js-input-pixels',
  ) as HTMLInputElement;

  const rootInputValue: number = Number(rootInput.value.replace(',', '.'));
  const pixelsInputValue: number = Number(pixelsInput.value.replace(',', '.'));

  return getToPixelValues(pixelsInputValue, rootInputValue);
};

const resultValueREM = () => {
  const remInput: HTMLInputElement = document.querySelector(
    '.js-input-rem',
  ) as HTMLInputElement;

  remInput.value = getValuesToInputPixels().toString();
};

button.addEventListener('click', (event) => {
  event.preventDefault();

  resultValueREM();
});
