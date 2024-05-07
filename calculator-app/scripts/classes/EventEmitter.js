class EventEmitter {
  test = 1;

  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, ...params) {
    const listeners = this.events[eventName] || [];
    listeners.forEach((listener) => {
      listener(...params);
    });
  }
}

export default EventEmitter;
