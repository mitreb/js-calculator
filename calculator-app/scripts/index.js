import CalculatorModel from './classes/CalculatorModel.js';
import CalculatorView from './classes/CalculatorView.js';
import CalculatorController from './classes/CalculatorController.js';

function main() {
  const model = new CalculatorModel();

  const rootElement = document.querySelector('#calculator');
  const view = new CalculatorView(rootElement);

  new CalculatorController(model, view);
}

main();