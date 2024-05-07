import * as functions from '../functions.js';

class ExpressionEvaluator {
  /**
   * Prepare the expression for evaluation.
   * Replace the mathematical symbols with the JavaScript operators.
   * @returns {string} The expression with the replaced operators.
   */
  static prepareExpression(expression) {
    // TODO: Get rid of the hardcoded values and use the KEYS object instead. 
    const result = expression
      .replace(/x/g, '*')
      .replace(/÷/g, '/')
      .replace(/\^/g, '**')
      .replace(/√\(/g, 'functions.sqrt(')
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/sin\(/g, 'functions.sin(')
      .replace(/cos\(/g, 'functions.cos(')
      .replace(/tan\(/g, 'functions.tan(')
      .replace(/log\(/g, 'functions.log(')
      .replace(/ln\(/g, 'functions.log(')
      .replace(/abs\(/g, 'functions.abs(')
      .replace(/sh\(/g, 'functions.sinh(')
      .replace(/ch\(/g, 'functions.cosh(')
      .replace(/th\(/g, 'functions.tanh(')
      .replace(/fact\(/g, 'functions.fact(');
    return result;
  }

  static evaluate(expression) {
    const preparedExpression = this.prepareExpression(expression);
    return eval(preparedExpression);
  }
};

export default ExpressionEvaluator;

