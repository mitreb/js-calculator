class Memory {
  #value = 0;

  /**
   * Get the value stored in memory.
   */
  get value() {
    return this.#value;
  }

  /**
   * Add the value to the memory.
   * @param {number} value
   */
  add(value) {
    if (Number.isFinite(value)) {
      this.#value += value;
    }
  }

  /**
   * Subtract the value from the memory.
   * @param {number} value
   */
  subtract(value) {
    if (Number.isFinite(value)) {
      this.#value -= value;
    }
  }

  /**
   * Clear the memory.
   */
  clear() {
    this.#value = 0;
  }
}

export default Memory;