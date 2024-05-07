import EventEmitter from "./EventEmitter.js";
import { KEYS, KEY_PRESS_EVENT } from "../constants.js";

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

class CalculatorView extends EventEmitter {
  constructor(root) {
    super();

    this.root = root;
    this.render();

    this.displayExpression = document.querySelector('.' + DISPLAY_EXPRESSION_CLASS);
    this.displayResult = document.querySelector('.' + DISPLAY_RESULT_CLASS);
    this.keys = document.querySelector('.' + KEYS_CLASS);

    this.keys.addEventListener('click', this.onKeyClick.bind(this));
  }

  render() {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = TEMPLATE;

    const keysContainer = templateElement.content.querySelector('.' + KEYS_CLASS);

    for (const row of KEYS) {
      for (const key of row) {
        const keyElement = document.createElement('button');
        keyElement.innerHTML = key.label;
        keyElement.dataset.value = key.value;
        keyElement.classList.add(KEY_CLASS);
        if (key.primary) {
          keyElement.classList.add(KEY_PRIMARY_CLASS);
        }
        if (key.type === 'number') {
          keyElement.classList.add(KEY_NUMBER_CLASS);
        }
        if (key.value === '0') {
          keyElement.classList.add(KEY_ZERO_CLASS);
        }
        keysContainer.append(keyElement);
      }
    }

    this.root.append(templateElement.content);
  }

  onKeyClick(event) {
    const { value } = event.target.dataset;
    if (value) {
      this.emit(KEY_PRESS_EVENT, { value });
    }
  }

  updateDisplay(expression, result) {
    this.displayExpression.textContent = expression;
    this.displayResult.textContent = result;
  }
}

export default CalculatorView;