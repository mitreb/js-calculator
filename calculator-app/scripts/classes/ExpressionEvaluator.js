import * as functions from '../functions.js';
import {
  KEYS,
  KEY_TYPES,
} from '../constants/keys.js';

/**
 * Class to evaluate the expression.
 */
class ExpressionEvaluator {
  /**
   * Prepares the expression for evaluation.
   * For each key, replaces the input with the code stored in the 'value' property of the key.
   * @param {string} expression The expression to prepare.
   * @returns {string} The expression ready to be evaluated.
   */
  static prepareExpression(expression) {
    let result = expression;

    for (const key of Object.values(KEYS)) {
      const keyValue = key.value;
      if (keyValue) {
        // Possible input for the key.
        const keyInput = key.input;

        // The prefix is needed to use functions from the functions.js file.
        let prefix = '';
        const isFunction = key.type === KEY_TYPES.FUNCTION;
        if (isFunction) {
          prefix = 'functions.';
        }

        // Replace the input with the code, if the input is found in the expression.
        const patternToBeReplaced = keyInput.replace('(', '\\(').replace('^', '\\^');
        const codeToReplaceWith = `${prefix}${keyValue}`;
        result = result.replace(
          new RegExp(patternToBeReplaced, 'g'),
          codeToReplaceWith,
        );
      }
    }
    return result;
  }

  /**
   * Evaluates the expression.
   * @param {string} expression The expression to evaluate.
   * @returns {number} The result of the expression.
   */
  static evaluate(expression) {
    const preparedExpression = this.prepareExpression(expression);
    return eval(preparedExpression);
  }
};

export default ExpressionEvaluator;

