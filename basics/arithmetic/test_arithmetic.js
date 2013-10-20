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
  document.write("<p>Math.max('cat', 'waffle', 'taco') = " + Math.max('cat', 'waffle', 'taco') + "</p>")
    // => NaN
