import { factorial } from '../utils.js';
import Memory from "./Memory.js";

class CalculatorModel {
  /** The expression to be evaluated. */
  #expression;

  /** The result of the computation. */
  #result;

  /** Whether to set the expression to the result we just computed. */
  #afterComputation;

  #memory = new Memory();

  /**
   * Create a new Calculator.
   */
  constructor() {
    this.reset();
  }

  /**
   * Reset the calculator to its initial state.
   */
  reset() {
    this.#expression = '';
    this.#result = 0;
    this.#afterComputation = false;
  }

  /**
   * Delete the last character from the expression.
   */
  delete() {
    this.#expression = this.#expression.slice(0, -1);
  }

  /**
   * Prepare the expression for evaluation.
   * Replace the mathematical symbols with the JavaScript operators.
   * @private
   * @returns {string} The expression with the replaced operators.
   */

  #prepareExpression() {
    console.log(this.#expression);
    const result = this.#expression
      .replace(/x/g, '*')
      .replace(/÷/g, '/')
      .replace(/\^/g, '**')
      .replace(/√/g, 'Math.sqrt')
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log(')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/abs\(/g, 'Math.abs(')
      .replace(/sh\(/g, 'Math.sinh(')
      .replace(/ch\(/g, 'Math.cosh(')
      .replace(/th\(/g, 'Math.tanh(')
      .replace(/fact\(/g, 'factorial(');
    console.log(result);
    return result;
  }

  /**
   * Compute the result based on the input.
   */
  compute() {
    const expression = this.#prepareExpression();
    this.#result = eval(expression);
    this.#afterComputation = true;
  }

  get expression() {
    return this.#expression;
  }

  /**
   * Add a value to the expression.
   * @param {string} value 
   */

  addToExpression(value) {
    // if we just computed a result, we the expression to be the result on next input
    if (this.#afterComputation && Number.isFinite(this.#result)) {
      this.#expression = String(this.#result);
      this.#afterComputation = false;
    }
    this.#expression += value;
  }

  /**
   * Get the result of the computation.
   * @returns {string} The result as a string.
   */
  get output() {
    return Number.isFinite(this.#result) ? this.#result : 'Error';
  }

  get result() {
    return this.#result;
  }

  get memory() {
    return this.#memory;
  }

  clearMemory() {
    this.#memory.clear();
  }

  addToMemory() {
    this.#memory.add(this.#result);
  }

  subtractFromMemory() {
    this.#memory.subtract(this.#result);
  }

  recallMemory() {
    this.addToExpression(this.#memory.value);
  }
}

export default CalculatorModel;
