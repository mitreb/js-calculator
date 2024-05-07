import {
  KEY_IDS,
  KEYS,
  KEEP_RESULT_KEYS,
  KEY_PRESS_EVENT,
} from "../constants/keys.js";

/**
 * Class to represent the calculator controller.
 * The controller is responsible for handling the user input.
 * It listens to key presses and updates the model and view accordingly.
 */
class CalculatorController {
  // A flag that indicates if the user pressed a key right after the computation.
  #afterComputation;

  /**
   * Creates an instance of the CalculatorController.
   * @param {CalculatorModel} model The model instance.
   * @param {CalculatorView} view The view instance.
   * @returns {CalculatorController} The controller instance.
   * @constructor
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.on(KEY_PRESS_EVENT, this.#handleKeyPress.bind(this));
    this.#updateView();
  }

  /**
   * Handles the key press event.
   * @param {string} key The key pressed.
   * @returns {void}
   * @private
   */
  #handleKeyPress({ key }) {
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

    this.#updateView();
  }

  /**
   * Updates the view.
   * @returns {void}
   * @private
   */
  #updateView() {
    const { expression, result } = this.model;
    this.view.updateDisplay(expression, result);
  }
}

export default CalculatorController;

