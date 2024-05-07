import CalculatorModel from './classes/CalculatorModel.js';
import CalculatorView from './classes/CalculatorView.js';
import CalculatorController from './classes/CalculatorController.js';
import { ROOT_ELEMENT_SELECTOR } from './constants.js';

function main() {
  const model = new CalculatorModel();

  const rootElement = document.querySelector(ROOT_ELEMENT_SELECTOR);
  const view = new CalculatorView(rootElement);

  new CalculatorController(model, view);
}

main();