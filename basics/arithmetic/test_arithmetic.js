// Playing around with maths in JavaScript

// Exponents
// The first argument is the base number; the second is the exponent
  document.write("<h1>Exponents</h1>");
  document.write("<p>Math.pow(3,2) = " + Math.pow(3,2) + "</p>");
    // => 9
  document.write("<p>Math.pow(4,3) = " + Math.pow(4,3) + "</p>");
    // => 64

document.write("<br>");

// Rounding, rounding up and rounding down
  document.write("<h1>Rounding</h1>");
  document.write("<p>Math.round(.4) = " + Math.round(.4) + "</p>")
    // => 0
  document.write("<p>Math.round(.5) = " + Math.round(.5) + "</p>")
    // => 1
  document.write("<p>Math.round(.6) = " + Math.round(.6) + "</p>")
    // => 1

  document.write("<br>");

  document.write("<h1>Rounding up</h1>");
  document.write("<p>Math.ceil(.9) = " + Math.ceil(.9) + "</p>")
    // => 1
  document.write("<p>Math.ceil(.1) = " + Math.ceil(.1) + "</p>")
    // => 1
  document.write("<p>Math.ceil(.01) = " + Math.ceil(.01) + "</p>")
    // => 1

  document.write("<br>");

  document.write("<h1>Rounding down</h1>");
  document.write("<p>Math.floor(1.01) = " + Math.floor(1.01) + "</p>")
    // => 1
  document.write("<p>Math.floor(1.99) = " + Math.floor(1.99) + "</p>")
    // => 1

document.write("<br>");

// Absolute value
  document.write("<h1>Absolute value</h1>");
  document.write("<p>Math.abs(256) = " + Math.abs(256) + "</p>")
    // => 256
  document.write("<p>Math.abs(-1024) = " + Math.abs(-1024) + "</p>")
    // => 1024

document.write("<br>");

// Largest/Smallest number in a set of arguments
  document.write("<h1>Largest argument</h1>");
  document.write("<p>Math.max(2, 5, 3) = " + Math.max(2, 5, 3) + "</p>")
    // => 5
  document.write("<p>Math.max(1.01, 0, 1) = " + Math.max(1.01, 0, 1) + "</p>")
    // => 1.01

  document.write("<br>");

  document.write("<h1>Smallest argument</h1>");
  document.write("<p>Math.min(72, 55, 13) = " + Math.min(72, 55, 13) + "</p>")
    // => 13
  document.write("<p>Math.min(1, 2, 0.5) = " + Math.min(1, 2, 0.5) + "</p>")
    // => 0.5

  document.write("<br>");

  document.write("<p>Math.max and Math.min do not like non-numbers:</p>")
  document.write("<p>Math.max('cat', 'waffle', 'taco') = " + Math.max('cat', 'waffle', 'taco') + "</p>")
    // => NaN
  document.write("<p>Math.min('beaver', 'tostada', 'lolrus') = " + Math.min('beaver', 'tostada', 'lolrus') + "</p>")
    // => NaN

document.write("<br>");

// Random number - produces a random number, 'x'
  document.write("<h1>Random numbers</h1>");
  document.write("<p>Math.random() = " + Math.random() + "</p>")
    // 0 <= x < 1

document.write("<br>");

// Square root
  document.write("<h1>Square roots</h1>");
  document.write("<p>Math.sqrt(4) = " + Math.sqrt(4) + "</p>")
    // => 2
  document.write("<p>Math.sqrt(9) = " + Math.sqrt(9) + "</p>")
    // => 3
  document.write("<p>Math.sqrt(16) = " + Math.sqrt(16) + "</p>")
    // => 4
  document.write("<p>Math.sqrt(25) = " + Math.sqrt(25) + "</p>")
    // => 5

document.write("<br>");

// Cosine
  document.write("<h1>Cosine</h1>");
  document.write("<p>Math.cos(3) = " + Math.cos(3) + "</p>")
  document.write("<p>Math.cos(10) = " + Math.cos(10) + "</p>")
  document.write("<p>Math.cos(782) = " + Math.cos(782) + "</p>")

document.write("<br>");

// Arccosine
  document.write("<h1>Arccosine</h1>");
  document.write("<p>Math.acos(0.9) = " + Math.acos(0.9) + "</p>")
  document.write("<p>Math.acos(1) = " + Math.acos(1) + "</p>")
    // => 0
  document.write("<p>Math.acos(1.01) = " + Math.acos(1.01) + "</p>")
    // Anything greater than 1 is NaN

document.write("<br>");

// Sine
  document.write("<h1>Sine</h1>");
  document.write("<p>Math.sin(3) = " + Math.sin(3) + "</p>")
  document.write("<p>Math.sin(82) = " + Math.sin(82) + "</p>")
  document.write("<p>Math.sin(447) = " + Math.sin(447) + "</p>")

document.write("<br>");

// Tangent
  document.write("<h1>Tangent</h1>");
  document.write("<p>Math.tan(3) = " + Math.tan(3) + "</p>")
  document.write("<p>Math.tan(12) = " + Math.tan(12) + "</p>")
  document.write("<p>Math.tan(917) = " + Math.tan(917) + "</p>")

document.write("<br>");

// Arctangent
  document.write("<h1>Arctangent</h1>");
  document.write("<p>Math.atan(2) = " + Math.atan(2) + "</p>")
  document.write("<p>Math.atan(34) = " + Math.atan(34) + "</p>")
  document.write("<p>Math.atan(348) = " + Math.atan(348) + "</p>")
