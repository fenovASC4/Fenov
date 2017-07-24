function derive(coefficient,exponent) 
{
  var baseNum = coefficient * exponent; // Gives the base in number form
  var exNum = exponent - 1; // Gives the exponent in number form
  var baseString = num.toString(baseNum); // Transforms the base into a string
  var exString = num.toString(exNum); // Transforms the exponent into a string
  var constant = "x^"; // this will stay the same for every single case
  var result = baseString.concat(constant, exString); // Combines all the strings in order
  return result; // returns the result
}

derive(7,8)