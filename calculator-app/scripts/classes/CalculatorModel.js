import Memory from "./Memory.js";
import ExpressionEvaluator from "./ExpressionEvaluator.js";

/**
 * Class to represent the calculator model.
 * The model is responsible for the calculator's logic.
 * It stores the expression and the result of the computation.
 * It also provides methods to interact with the memory.
 */
class CalculatorModel {
  #expression;
  #result;
  #memory = new Memory();

  constructor() {
    this.reset();
  }

  /**
   * Get the expression.
   * @returns {string} The expression.
   */
  get expression() {
    return this.#expression;
  }

  /**
  * Get the result.
  * @returns {number|string} The result.
  */
  get result() {
    return this.#result;
  }

  /**
   * Resets the calculator to its initial state.
   * @returns {void} 
   */
  reset() {
    this.#expression = '';
    this.#result = 0;
  }

  /**
   * Deletes the last character from the expression.
   * @returns {void}
   */
  delete() {
    this.#expression = this.#expression.slice(0, -1);
  }

  /**
   * Computes the result based on the input.
   * @returns {void}
   */
  compute() {
    try {
      const result = ExpressionEvaluator.evaluate(this.#expression);
      this.#result = result
    } catch (error) {
      this.#result = error;
    }
  }

  /**
   * Adds a value to the expression.
   * @param {string} value
   * @returns {void}
   */
  addToExpression(value) {
    this.#expression += value;
  }

  /**
   * Sets the expression to the result.
   * @returns {void}
   */
  setExpressionToResult() {
    this.#expression = Number.isFinite(this.#result)
      ? String(this.#result)
      : '';
  }

  /**
   * Clears the memory.
   * @returns {void}
   */
  clearMemory() {
    this.#memory.clear();
  }

  /**
   * Adds the result to the memory.
   * @returns {void}
   */
  addToMemory() {
    this.#memory.add(this.#result);
  }

  /**
   * Subtracts the result from the memory.
   * @returns {void}
   */
  subtractFromMemory() {
    this.#memory.subtract(this.#result);
  }

  /**
   * Recalls the value from the memory.
   * @returns {void}
   */
  recallMemory() {
    this.addToExpression(this.#memory.value);
  }
}

export default CalculatorModel;
