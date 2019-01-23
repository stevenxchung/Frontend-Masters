// Template strings
// Extensions added to the object literal syntax
var a = 1;
// Before ES6 you would have to declare the following for 'a'
var obj = {
  a: a
};
// In ES6, if the property name and value are the same we can declare 'a' to be
var obj = {
  // This is by using concise properties
  a
};
