/**
 * Memory class to store the value.
 */
class Memory {
  #value = 0;

  /**
   * Get the value from the memory.
   * @returns {number} The value stored in the memory.
   */
  get value() {
    return this.#value;
  }

  /**
   * Adds the value to the memory.
   * @param {number} value
   * @returns {void}
   */
  add(value) {
    if (Number.isFinite(value)) {
      this.#value += value;
    }
  }

  /**
   * Subtracts the value from the memory.
   * @param {number} value
   * @returns {void}
   */
  subtract(value) {
    if (Number.isFinite(value)) {
      this.#value -= value;
    }
  }

  /**
   * Clears the memory.
   * @returns {void}
   */
  clear() {
    this.#value = 0;
  }
}

export default Memory;