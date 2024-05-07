import Memory from "./Memory.js";
import ExpressionEvaluator from "./ExpressionEvaluator.js";

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
   * Compute the result based on the input.
   */
  compute() {
    this.#result = ExpressionEvaluator.evaluate(this.#expression);
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
