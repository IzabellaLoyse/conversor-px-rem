const button: HTMLButtonElement = document.querySelector(
  '.js-button-calculate',
) as HTMLButtonElement;

const getToPixelValues = (valuePixels: number, valueRoot: number) => {
  const result = valuePixels / valueRoot;

  if (!valuePixels || !valueRoot) {
    alert('Preencha o(s) campo(s) com um valor válido.');
    return null;
  }

  return result;
};

const getValuesToInputPixels = () => {
  const form = document.forms as any;
  const formMeasurement = form.measurementConverter;

  const { rootPixels, pixels } = formMeasurement;

  const rootInputValue = Number(rootPixels.value.replace(',', '.'));
  const pixelsInputValue = Number(pixels.value.replace(',', '.'));
  const result = getToPixelValues(pixelsInputValue, rootInputValue) as any;

  return result;
};

const resultValueREM = () => {
  const form = document.forms as any;
  const formMeasurement = form.measurementConverter;

  const { rem } = formMeasurement;

  rem.value = getValuesToInputPixels();
};

button.addEventListener('click', (event) => {
  event.preventDefault();

  resultValueREM();
});
