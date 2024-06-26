/* Key identifiers */
export const KEY_IDS = {
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE',
  SIX: 'SIX',
  SEVEN: 'SEVEN',
  EIGHT: 'EIGHT',
  NINE: 'NINE',
  ZERO: 'ZERO',
  DECIMAL: 'DECIMAL',
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  EQUALS: 'EQUALS',
  OPEN_PARENTHESIS: 'OPEN_PARENTHESIS',
  CLOSE_PARENTHESIS: 'CLOSE_PARENTHESIS',
  CLEAR: 'CLEAR',
  DELETE: 'DELETE',
  MEMORY_CLEAR: 'MEMORY_CLEAR',
  MEMORY_ADD: 'MEMORY_ADD',
  MEMORY_SUBTRACT: 'MEMORY_SUBTRACT',
  MEMORY_RECALL: 'MEMORY_RECALL',
  SIN: 'SIN',
  COS: 'COS',
  TAN: 'TAN',
  SH: 'SH',
  CH: 'CH',
  TH: 'TH',
  E: 'E',
  PI: 'PI',
  POWER: 'POWER',
  SQRT: 'SQRT',
  SQUARE: 'SQUARE',
  LOG: 'LOG',
  LN: 'LN',
  ABS: 'ABS',
  FACT: 'FACT',
};

/* Key types */
export const KEY_TYPES = {
  NUMBER: 'NUMBER',
  CONSTANT: 'CONSTANT',
  OPERATOR: 'OPERATOR',
  FUNCTION: 'FUNCTION',
  SYSTEM: 'SYSTEM',
}

/*
  * Key definitions
  * label: The text to display on the key.
  * input: The input to append to the expression.
  * value: The value to replace the input with in the expression.
  * type: The type of the key.
  * primary: Whether the key is a primary operator.
*/
export const KEYS = {
  [KEY_IDS.ONE]: { label: '1', input: '1', type: KEY_TYPES.NUMBER },
  [KEY_IDS.TWO]: { label: '2', input: '2', type: KEY_TYPES.NUMBER },
  [KEY_IDS.THREE]: { label: '3', input: '3', type: KEY_TYPES.NUMBER },
  [KEY_IDS.FOUR]: { label: '4', input: '4', type: KEY_TYPES.NUMBER },
  [KEY_IDS.FIVE]: { label: '5', input: '5', type: KEY_TYPES.NUMBER },
  [KEY_IDS.SIX]: { label: '6', input: '6', type: KEY_TYPES.NUMBER },
  [KEY_IDS.SEVEN]: { label: '7', input: '7', type: KEY_TYPES.NUMBER },
  [KEY_IDS.EIGHT]: { label: '8', input: '8', type: KEY_TYPES.NUMBER },
  [KEY_IDS.NINE]: { label: '9', input: '9', type: KEY_TYPES.NUMBER },
  [KEY_IDS.ZERO]: { label: '0', input: '0', type: KEY_TYPES.NUMBER },
  [KEY_IDS.DECIMAL]: { label: '.', input: '.', type: KEY_TYPES.NUMBER },
  [KEY_IDS.ADD]: { label: '+', input: '+', type: KEY_TYPES.OPERATOR, primary: true },
  [KEY_IDS.SUBTRACT]: { label: '-', input: '-', type: KEY_TYPES.OPERATOR, primary: true },
  [KEY_IDS.MULTIPLY]: { label: 'x', input: 'x', value: '*', type: KEY_TYPES.OPERATOR, primary: true },
  [KEY_IDS.DIVIDE]: { label: '÷', input: '÷', value: '/', type: KEY_TYPES.OPERATOR, primary: true },
  [KEY_IDS.EQUALS]: { label: '=', input: '=', type: KEY_TYPES.OPERATOR, primary: true },
  [KEY_IDS.OPEN_PARENTHESIS]: { label: '(', input: '(', type: KEY_TYPES.OPERATOR, },
  [KEY_IDS.CLOSE_PARENTHESIS]: { label: ')', input: ')', type: KEY_TYPES.OPERATOR, },
  [KEY_IDS.CLEAR]: { label: 'C', input: 'clear', type: KEY_TYPES.SYSTEM },
  [KEY_IDS.DELETE]: { label: '⌫', input: 'delete', type: KEY_TYPES.SYSTEM },
  [KEY_IDS.MEMORY_CLEAR]: { label: 'mc', input: 'mc', type: KEY_TYPES.SYSTEM },
  [KEY_IDS.MEMORY_ADD]: { label: 'm+', input: 'm+', type: KEY_TYPES.SYSTEM },
  [KEY_IDS.MEMORY_SUBTRACT]: { label: 'm-', input: 'm-', type: KEY_TYPES.SYSTEM },
  [KEY_IDS.MEMORY_RECALL]: { label: 'mr', input: 'mr', type: KEY_TYPES.SYSTEM },
  [KEY_IDS.SIN]: { label: 'sin', input: 'sin(', value: 'sin(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.COS]: { label: 'cos', input: 'cos(', value: 'cos(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.TAN]: { label: 'tan', input: 'tan(', value: 'tan(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.SH]: { label: 'sh', input: 'sh(', value: 'sinh(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.CH]: { label: 'ch', input: 'ch(', value: 'cosh(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.TH]: { label: 'th', input: 'th(', value: 'tanh(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.E]: { label: 'e', input: 'e', value: 'Math.E', type: KEY_TYPES.CONSTANT },
  [KEY_IDS.PI]: { label: 'π', input: 'π', value: 'Math.PI', type: KEY_TYPES.CONSTANT },
  [KEY_IDS.POWER]: { label: '^', input: '^', value: '**', type: KEY_TYPES.OPERATOR },
  [KEY_IDS.SQRT]: { label: '√', input: '√(', value: 'sqrt(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.SQUARE]: { label: 'x²', input: '^2', value: '**2', type: KEY_TYPES.OPERATOR },
  [KEY_IDS.LOG]: { label: 'log', input: 'log(', value: 'log(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.LN]: { label: 'ln', input: 'ln(', value: 'ln(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.ABS]: { label: 'abs', input: 'abs(', value: 'abs(', type: KEY_TYPES.FUNCTION },
  [KEY_IDS.FACT]: { label: '!', input: 'fact(', value: 'fact(', type: KEY_TYPES.FUNCTION },
}

/* Key panel layout */
export const KEY_PANEL = [
  // Row 1
  [
    KEY_IDS.MEMORY_CLEAR,
    KEY_IDS.MEMORY_ADD,
    KEY_IDS.MEMORY_SUBTRACT,
    KEY_IDS.MEMORY_RECALL,
    KEY_IDS.CLEAR,
    KEY_IDS.DELETE,
    KEY_IDS.POWER,
    KEY_IDS.DIVIDE,
  ],
  // Row 2
  [
    KEY_IDS.SQRT,
    KEY_IDS.SQUARE,
    KEY_IDS.OPEN_PARENTHESIS,
    KEY_IDS.CLOSE_PARENTHESIS,
    KEY_IDS.SEVEN,
    KEY_IDS.EIGHT,
    KEY_IDS.NINE,
    KEY_IDS.MULTIPLY,
  ],
  // Row 3
  [
    KEY_IDS.SIN,
    KEY_IDS.COS,
    KEY_IDS.TAN,
    KEY_IDS.E,
    KEY_IDS.FOUR,
    KEY_IDS.FIVE,
    KEY_IDS.SIX,
    KEY_IDS.SUBTRACT,
  ],
  // Row 4
  [
    KEY_IDS.SH,
    KEY_IDS.CH,
    KEY_IDS.TH,
    KEY_IDS.PI,
    KEY_IDS.ONE,
    KEY_IDS.TWO,
    KEY_IDS.THREE,
    KEY_IDS.ADD,
  ],
  // Row 5
  [
    KEY_IDS.ABS,
    KEY_IDS.LOG,
    KEY_IDS.LN,
    KEY_IDS.FACT,
    KEY_IDS.ZERO,
    KEY_IDS.DECIMAL,
    KEY_IDS.EQUALS,
  ],
];

/* Keep the result if any of these keys is pressed right after computation */
export const KEEP_RESULT_KEYS = [
  KEY_IDS.ADD,
  KEY_IDS.SUBTRACT,
  KEY_IDS.MULTIPLY,
  KEY_IDS.DIVIDE,
  KEY_IDS.POWER,
  KEY_IDS.SQUARE,
  KEY_IDS.EQUALS,
  KEY_IDS.MEMORY_CLEAR,
  KEY_IDS.MEMORY_ADD,
  KEY_IDS.MEMORY_SUBTRACT,
  KEY_IDS.MEMORY_RECALL,
];

/* Events */
export const KEY_PRESS_EVENT = 'key-press';