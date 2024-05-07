import EventEmitter from "./EventEmitter.js";
import {
  KEY_IDS,
  KEY_TYPES,
  KEYS,
  KEY_PANEL,
  KEY_PRESS_EVENT,
} from "../constants/keys.js";

const DISPLAY_EXPRESSION_CLASS = 'calculator__expression';
const DISPLAY_RESULT_CLASS = 'calculator__result';
const KEYS_CLASS = 'calculator__keys';
const KEY_CLASS = 'calculator__key';
const KEY_PRIMARY_CLASS = 'calculator__key--primary';
const KEY_NUMBER_CLASS = 'calculator__key--number';
const KEY_ZERO_CLASS = 'calculator__key--zero';

const TEMPLATE = `
<div class="calculator">
  <div class="calculator__display">
    <div class="calculator__expression"></div>
    <div class="calculator__result"></div>
  </div>
  <div class="${KEYS_CLASS}"></div>
</div>`;

/**
 * Class to represent the calculator view.
 */
class CalculatorView extends EventEmitter {
  #root;
  #displayExpression
  #displayResult;
  #keys;

  /**
   * Creates an instance of the CalculatorView.
   * @param {HTMLElement} root The root element to attach the view.
   * @returns {CalculatorView} The view instance.
   * @constructor
   */
  constructor(root) {
    super();

    this.#root = root;
    this.#render();

    this.#displayExpression = document.querySelector('.' + DISPLAY_EXPRESSION_CLASS);
    this.#displayResult = document.querySelector('.' + DISPLAY_RESULT_CLASS);
    this.#keys = document.querySelector('.' + KEYS_CLASS);

    this.#keys.addEventListener('click', this.#onKeyClick.bind(this));
  }

  /**
   * Renders the calculator view.
   * @returns {void}
   * @private
   */
  #render() {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = TEMPLATE;

    const keysContainer = templateElement.content.querySelector('.' + KEYS_CLASS);

    for (const row of KEY_PANEL) {
      for (const key of row) {
        const keyElement = document.createElement('button');
        keyElement.innerHTML = KEYS[key].label;
        keyElement.dataset.key = key;
        keyElement.classList.add(KEY_CLASS);
        if (KEYS[key].primary) {
          keyElement.classList.add(KEY_PRIMARY_CLASS);
        }
        if (KEYS[key].type === KEY_TYPES.NUMBER) {
          keyElement.classList.add(KEY_NUMBER_CLASS);
        }
        if (key === KEY_IDS.ZERO) {
          keyElement.classList.add(KEY_ZERO_CLASS);
        }
        keysContainer.append(keyElement);
      }
    }

    this.#root.append(templateElement.content);
  }

  /**
   * Handles the click event on the key.
   * @param {Event} event The event object.
   * @returns {void}
   * @private
   */
  #onKeyClick(event) {
    const { key } = event.target.dataset;
    if (key) {
      this.emit(KEY_PRESS_EVENT, { key });
    }
  }

  /** 
   * Returns the output based on the result.
   * @param {number|string|SyntaxError} result The result of the expression.
   * @returns {string} The output based on the result.
   * @private
   */
  #getOutput(result) {
    if (
      Number.isFinite(result) ||
      [Infinity, -Infinity].includes(result)
    ) {
      return result.toString();
    } else if (Number.isNaN(result)) {
      return 'Not a number';
    } else if (result instanceof SyntaxError) {
      return 'Invalid expression';
    } else {
      return 'Error';
    }
  }

  /**
   * Updates the display with the expression and result.
   * @param {string} expression The expression to display.
   * @param {number|string|SyntaxError} result The result of the expression.
   * @returns {void}
   */
  updateDisplay(expression, result) {
    this.#displayExpression.textContent = expression;
    this.#displayResult.textContent = this.#getOutput(result);
  }
}

export default CalculatorView;