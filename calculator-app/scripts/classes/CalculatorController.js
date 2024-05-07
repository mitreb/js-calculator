import { KEY_PRESS_EVENT } from "../constants.js";

class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.on(KEY_PRESS_EVENT, this.handleKeyPress.bind(this));
    this.updateView();
  }

  handleKeyPress({ value }) {
    if (value === '=') {
      this.model.compute();
    } else if (value === 'clear') {
      this.model.reset();
    } else if (value === 'delete') {
      this.model.delete();
    } else if (value === 'mc') {
      this.model.clearMemory();
    } else if (value === 'm+') {
      this.model.addToMemory();
    } else if (value === 'm-') {
      this.memory.subtractFromMemory();
    } else if (value === 'mr') {
      this.model.recallMemory();
    } else {
      this.model.addToExpression(value);
    }

    this.updateView();
  }

  updateView() {
    const { expression, output } = this.model;
    this.view.updateDisplay(expression, output);
  }
}

export default CalculatorController;

