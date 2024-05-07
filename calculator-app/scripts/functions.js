
/**
 * Returns the square root of a number.
 * @param {number} n
 * @returns {number}
 */
export function sqrt(n) {
  return Math.sqrt(n);
}

/**
 * Returns the natural logarithm of a number.
 * @param {number} n
 * @returns {number}
 */
export function ln(n) {
  return Math.log(n);
}

/**
 * Returns the sine of a number.
 * @param {number} n
 * @returns {number}
 */
export function sin(n) {
  return Math.sin(n);
}

/**
 * Returns the cosine of a number.
 * @param {number} n
 * @returns {number}
 */
export function cos(n) {
  return Math.cos(n);
}

/**
 * Returns the tangent of a number.
 * @param {number} n
 * @returns {number}
 */
export function tan(n) {
  return Math.tan(n);
}

/**
 * Returns the hyperbolic sine of a number.
 * @param {number} n
 * @returns {number}
 */
export function sh(n) {
  return Math.sinh(n);
}

/**
 * Returns the hyperbolic cosine of a number.
 * @param {number} n
 * @returns {number}
 */
export function ch(n) {
  return Math.cosh(n);
}

/**
 * Returns the hyperbolic tangent of a number.
 * @param {number} n
 * @returns {number}
 */
export function th(n) {
  return Math.tanh(n);
}

/**
 * Returns the absolute value of a number.
 * @param {number} n
 * @returns {number}
 */
export function abs(n) {
  return Math.abs(n);
}

/**
 * Returns the factorial of a number.
 * @param {number} n
 * @returns {number}
 */
export function fact(n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return NaN;
  }

  if (n > 100) {
    return Number.POSITIVE_INFINITY;
  }

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
