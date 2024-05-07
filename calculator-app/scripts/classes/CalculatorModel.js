import Memory from "./Memory.js";
import ExpressionEvaluator from "./ExpressionEvaluator.js";

class CalculatorModel {
  /** The expression to be evaluated. */
  #expression;

  /** The result of the computation. */
  #result;

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
    try {
      const result = ExpressionEvaluator.evaluate(this.#expression);
      this.#result = result
    } catch (error) {
      this.#result = error;
    }
  }

  get expression() {
    return this.#expression;
  }

  /**
   * Add a value to the expression.
   * @param {string} value 
   */
  addToExpression(value) {
    this.#expression += value;
  }

  setExpressionToResult() {
    this.#expression = Number.isFinite(this.#result)
      ? String(this.#result)
      : '';
  }

  get result() {
    return this.#result;
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
