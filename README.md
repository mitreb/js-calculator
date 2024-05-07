# JS Calculator

## Overview

This simple calculator app is built using vanilla JavaScript and follows the MVC pattern. It leverages ES6 modules for a modular and maintainable codebase.

## Supported Functions

The calculator currently supports the following functions (keys):

- **Digits**
- **Decimal Point**
- **Basic Arithmetic Operations**: `+`, `-`, `x`, `÷`
- **Special Keys**: `=`, `(`, `)`, `Clear (C)`, `Delete (⌫)`
- **Memory Functions**: `Clear Memory (mc)`, `Add to Memory (m+)`, `Subtract from Memory (m-)`, `Recall Memory (mr)`
- **Trigonometric Functions**: `Sine (sin)`, `Cosine (cos)`, `Tangent (tan)`
- **Hyperbolic Functions**: `Hyperbolic Sine (sh)`, `Hyperbolic Cosine (ch)`, `Hyperbolic Tangent (th)`
- **Constants**: `e`, `π`
- **Exponentiation**: `Power (^)`
- **Square Root**: `Square Root (√)`
- **Square**: `Square (x²)`
- **Logarithms**: `Decimal Logarithm (log)`, `Natural Logarithm (ln)`
- **Absolute Value**: `abs`
- **Factorial**: `!`

## Usage

To add the calculator to a webpage, follow these steps:

1. Include the styles in your HTML file:

```html
<link rel="stylesheet" href="calculator-app/styles.css" />
```

2. Add the calculator script (ES6 module) to your HTML file

```html
<script type="module" src="calculator-app/index.js"></script>
```

3. Ensure that an HTML element with the ID “calculator” exists on your page. The calculator will render itself within this element.

## Running Locally

The project includes a demo HTML file that you can run locally:

1. Install the optional dev dependency (a simple static server `http-server`) by running:

```js
  npm install
```

2. Start the local server:

```js
  npm start
```

3. Open `localhost:3000` in your browser to access the calculator.

## Next Steps

Here are some tasks to enhance the calculator app:

- Add Auto-Tests: Write tests to ensure the correctness of calculations.
- Extend Functionality: Consider adding more mathematical functions or features.
- User-Friendly Design: Make the UX more intuitive and familiar.
- Developer Experience: Improve the development workflow.
