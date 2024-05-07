/**
 * Class that represents a simple event emitter.
 */
class EventEmitter {
  #events;

  constructor() {
    this.#events = {};
  }

  /**
   * Adds a listener to the event.
   * @param {string} eventName The event name.
   * @param {Function} listener The listener function.
   * @returns {void}
   */
  on(eventName, listener) {
    if (!this.#events[eventName]) {
      this.#events[eventName] = [];
    }
    this.#events[eventName].push(listener);
  }

  /**
   * Removes a listener from the event.
   * @param {string} eventName The event name.
   * @param {Function} listener The listener function.
   * @returns {void}
   */
  emit(eventName, ...params) {
    const listeners = this.#events[eventName] || [];
    listeners.forEach((listener) => {
      listener(...params);
    });
  }
}

export default EventEmitter;
