document.write("<h1>String literals</h1>")
  var some_string_literal = ""
  document.write("<p>An empty string: " + some_string_literal + "</p>")

  var some_string_literal = "chicken and waffles"
  document.write("<p>A string in double quotes: " + some_string_literal + "</p>")

  var some_string_literal = 'waffles and chicken'
  document.write("<p>A string in single quotes: " + some_string_literal + "</p>")

  var some_string_literal = "7.75"
  document.write("<p>A number between quotes: " + some_string_literal + "</p>")

  var some_string_literal = "Singin' in the rain"
  document.write("<p>Single quotes within a double-quote string: " + some_string_literal + "</p>")

  var some_string_literal = 'A "glorious feeling," say reviews'
  document.write("<p>Double quotes within a single-quote string: " + some_string_literal + "</p>")

  var some_string_literal = 'I\'m singin\' in the rain'
  document.write("<p>Escaping non-delimited single-quotes within a single-quote-delimited string: " + some_string_literal + "</p>")

  var some_string_literal = "He said, \"I get it, you're singing in the rain.\""
  document.write("<p>Escaping non-delimited double-quotes within a double-quote-delimited string: " + some_string_literal + "</p>")

document.write("<br>")

document.write("<h1>String concatenation</h1>")
  var string1 = "Hello"
  var string2 = "world"

  document.write("<p>Concatenating strings: " + string1 + ", " + string2 + "</p>")

document.write("<br>")

document.write("<h1>String length</h1>")
  var really_long_string = "supercalafragalisticexpialadoshus"

  document.write("<p>really_long_string: " + really_long_string + "</p>")
  document.write("<p>Getting the length of really_long_string: " + really_long_string.length + "</p>")

document.write("<br>")

document.write("<h1>String indices</h1>")
  var some_string = "It's peanut butter jelly time"

  document.write("<p>some_string: " + some_string + "</p>")
  document.write("<p>some_string.charAt(0): " + some_string.charAt(0) + "</p>")
  document.write("<p>some_string.charAt(some_string.length - 1): " + some_string.charAt(some_string.length - 1) + "</p>")

  document.write("<br>")

  document.write("<p>Using substring:</p>")
  document.write("<p>some_string.substring(5, 24): " + some_string.substring(5, 24) + "</p>")

  document.write("<br>")

  document.write("<p>Using slice:</p>")
  document.write("<p>some_string.slice(5, 24): " + some_string.slice(5, 24) + "</p>")
  document.write("<p>some_string.slice(-4): " + some_string.slice(-4) + "</p>")

  document.write("<br>")

  document.write("<p>Getting the index of the first instance of a character in a string:</p>")
  document.write("<p>some_string.indexOf('e'): " + some_string.indexOf('e') + "</p>")

  document.write("<br>")

  document.write("<p>Getting the index of the last instance of a character in a string:</p>")
  document.write("<p>some_string.lastIndexOf('e'): " + some_string.lastIndexOf('e') + "</p>")



document.write("<p></p>")
