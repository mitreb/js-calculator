export const KEYS = [
  [
    { value: 'mc', label: 'mc', type: 'operation' },
    { value: 'm+', label: 'm+', type: 'operation' },
    { value: 'm-', label: 'm-', type: 'operation' },
    { value: 'mr', label: 'mr', type: 'operation' },
    { value: 'clear', label: 'C', type: 'operation' },
    { value: 'delete', label: '⌫', type: 'operation' },
    { value: '^', label: '^', type: 'operation' },
    { value: '/', label: '÷', type: 'operation', primary: true },
  ],

  [
    { value: '√(', label: '√', type: 'operation' },
    { value: '^(2)', label: 'x<sup>2</sup>', type: 'operation' },
    { value: '(', label: '(', type: 'operation' },
    { value: ')', label: ')', type: 'operation' },
    { value: '7', label: '7', type: 'number' },
    { value: '8', label: '8', type: 'number' },
    { value: '9', label: '9', type: 'number' },
    { value: '*', label: 'x', type: 'operation', primary: true },
  ],

  [
    { value: 'sin(', label: 'sin', type: 'operation' },
    { value: 'cos(', label: 'cos', type: 'operation' },
    { value: 'tan(', label: 'tan', type: 'operation' },
    { value: 'e', label: 'e', type: 'operation' },
    { value: '4', label: '4', type: 'number' },
    { value: '5', label: '5', type: 'number' },
    { value: '6', label: '6', type: 'number' },
    { value: '-', label: '-', type: 'operation', primary: true },
  ],

  [
    { value: 'sh(', label: 'sh', type: 'operation' },
    { value: 'ch(', label: 'ch', type: 'operation' },
    { value: 'th(', label: 'th', type: 'operation' },
    { value: 'π', label: 'π', type: 'operation' },
    { value: '1', label: '1', type: 'number' },
    { value: '2', label: '2', type: 'number' },
    { value: '3', label: '3', type: 'number' },
    { value: '+', label: '+', primary: true },
  ],

  [
    { value: 'abs', label: 'abs' },
    { value: 'log(', label: 'log' },
    { value: 'ln(', label: 'ln' },
    { value: 'fact(', label: '!' },
    { value: '0', label: '0', type: 'number' },
    { value: '.', label: '.', type: 'number' },
    { value: '=', label: '=', primary: true },
  ],

];

export const KEY_PRESS_EVENT = 'key-press';