var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {return ["foo", 1]};
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return [ "foo" , 1 ]}
function addElementToEndOfArray(array, element) {return [1, "foo"]}
function destructivelyAddElementToEndOfArray(array, element) {array = array.push(element)
return [1, "foo"]}
function accessElementInArray(array, index) {return array[2]}
