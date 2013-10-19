// Identifiers are JavaScript's way of naming variables.

// Identifiers in JavaScript must begin with a letter, an underscore or a dollar sign.
// The following are all legal identifiers:

x
some_variable
_fluffy_bunnies
v8juice
$waffles



// It is important to keep in mind that JavaScript reserves numerous identifiers as
// keywords for the JavaScript programming language. These words cannot be used as
// identifiers:

break
case
delete
function
return
typeof
switch
if
do
var
with
try
else
catch
this
in
void
continue
instanceof
false
throw
true
while
default
for
final
finally
new
null

// JavaScript also reserves certain keywords which are not currently used in the
// language, but might be used in future versions:

const
enum
super
class
import
extends
export

// Some words - though they can be used legally in standard JavaScript - are
// reserved in 'Strict Mode:'

implements
package
yield
let
private
static
public
interface
protected

// Though not fully reserved, Strict Mode also restricts the use of the following
// words as variable, function or parameter names:

arguments
eval

// ECMAScript 3 also reserves words from JavaScript. Avoid using these words as
// identifiers if code will be run under ECMAScript 3:

abstract
boolean
implements
package
transient
char
throws
class
const
double
export
extends
byte
final
float
goto
native
private
int
protected
interface
public
long
short
import
static
super
enum
synchronized
volatile

// JavaScript also has numerous predefined global variables and function names:

arguments
Array
Boolean
decodeURI
decodeURIComponent
encodeURI
Infinity
isFinite
encodeURIComponent
Date
Error
eval
EvalError
JSON
Math
Function
NaN
isNaN
Number
Object
parseFloat
parseInt
RangeError
ReferenceError
RegExp
String
SyntaxError
TypeError
undefined
URIError
