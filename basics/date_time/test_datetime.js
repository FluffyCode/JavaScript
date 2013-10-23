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
some_date = new Date(2011, 2, 16, 12, 30, 0)

document.write("<h1>Creating a Date object with a set time</h1>")
document.write("<p>" + some_date + "</p>")
  // => Wed Mar 16 2011 12:30:00 GMT-0700 (PDT)

document.write("<br>")

// Note that when creating a Date object with a set time, the fourth argument,
// hours, works in 24-hour time. Setting the hour-time in excess of 24-hour
// chunks can even force the Date object to advance days:
some_date = new Date(2013, 9, 23, 0, 0, 0)
document.write("<p>" + some_date + "</p>")
  // => Wed Oct 23 2013 00:00:00 GMT-0700 (PDT)
some_date = new Date(2013, 9, 23, 24, 0, 0)
document.write("<p>" + some_date + "</p>")
  // => Thu Oct 24 2013 00:00:00 GMT-0700 (PDT)
some_date = new Date(2013, 9, 23, 48, 0, 0)
document.write("<p>" + some_date + "</p>")
  // => Fri Oct 25 2013 00:00:00 GMT-0700 (PDT)
