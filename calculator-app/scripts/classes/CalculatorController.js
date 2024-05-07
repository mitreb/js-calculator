import {
  KEY_IDS,
  KEYS,
  KEEP_RESULT_KEYS,
  KEY_PRESS_EVENT,
} from "../constants/keys.js";

class CalculatorController {
  /** Whether to set the expression to the result we just computed. */
  #afterComputation;

  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.on(KEY_PRESS_EVENT, this.handleKeyPress.bind(this));
    this.updateView();
  }

  handleKeyPress({ key }) {
    if (this.#afterComputation) {
      if (KEEP_RESULT_KEYS.includes(key)) {
        this.model.setExpressionToResult();
      } else {
        this.model.reset();
      }
      this.#afterComputation = false;
    }

    if (key === KEY_IDS.EQUALS) {
      this.model.compute();
      this.#afterComputation = true;
    } else if (key === KEY_IDS.CLEAR) {
      this.model.reset();
    } else if (key === KEY_IDS.DELETE) {
      this.model.delete();
    } else if (key === KEY_IDS.MEMORY_CLEAR) {
      this.model.clearMemory();
    } else if (key === KEY_IDS.MEMORY_ADD) {
      this.model.addToMemory();
    } else if (key === KEY_IDS.MEMORY_SUBTRACT) {
      this.model.subtractFromMemory();
    } else if (key === KEY_IDS.MEMORY_RECALL) {
      this.model.recallMemory();
    } else {
      const { input } = KEYS[KEY_IDS[key]];
      this.model.addToExpression(input);
    }

    this.updateView();
  }

  updateView() {
    const { expression, result } = this.model;
    this.view.updateDisplay(expression, result);
  }
}

export default CalculatorController;

