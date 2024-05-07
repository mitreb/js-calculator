import * as functions from '../functions.js';
import {
  KEYS,
  KEY_TYPES,
} from '../constants/keys.js';

class ExpressionEvaluator {
  /**
   * Prepare the expression for evaluation.
   * Replace the mathematical symbols with the JavaScript operators.
   * @returns {string} The expression with the replaced operators.
   */
  static prepareExpression(expression) {
    let result = expression;
    for (const key of Object.values(KEYS)) {
      const keyValue = key.value;
      if (keyValue) {
        const keyInput = key.input;
        const pattern = keyInput.replace('(', '\\(').replace('^', '\\^');

        let prefix = '';
        const isFunction = key.type === KEY_TYPES.FUNCTION;
        if (isFunction) {
          prefix = 'functions.';
        }

        result = result.replace(new RegExp(pattern, 'g'), `${prefix}${keyValue}`);
      }
    }
    return result;
  }

  static evaluate(expression) {
    const preparedExpression = this.prepareExpression(expression);
    return eval(preparedExpression);
  }
};

export default ExpressionEvaluator;

