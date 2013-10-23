// Basic date (year, month, day)
var some_date = new Date(2011, 2, 16)
// Note that the month is indexed:
// Jan = 0, Feb = 1, Mar = 2, Apr = 3, May = 4, Jun = 5
// Jul = 6, Aug = 7, Sep = 8, Oct = 9, Nov = 10, Dec = 11

document.write("<h1>Creating a Date object</h1>")
document.write("<p>" + some_date + "</p>")
  // => Wed Mar 16 2011 00:00:00 GMT-0700 (PDT)

document.write("<br>")

// Setting time with the date
some_date = new Date(2011, 2, 16, 12, 30, 00)

document.write("<h1>Creating a Date object with a set time</h1>")
document.write("<p>" + some_date + "</p>")
  // => Wed Mar 16 2011 12:30:00 GMT-0700 (PDT)
