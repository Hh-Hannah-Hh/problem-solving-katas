module.exports = createRef;

function createRef(employeeArr, strOne, strTwo) {
  // takes an array of employees as an argument
  // takes an string as a parameter
  // takes another string as a parameter

  // set up empty object to return
  let employeeObj = {};

  // for each employee object in the employees array...
  // iteration method - for loop
  for (let i = 0; i < employeeArr.length; i++) {
    const objectToSearch = employeeArr[i];

    // the new object key = the value of that key
    let key = objectToSearch[strOne];
    // the new object value = the value of that key
    let value = objectToSearch[strTwo];

    employeeObj[key] = value;
    // or to be more concise...
    // employeeObj[objectToSearch[strOne]] = objectToSearch[strTwo];
  }
  // return new object
  return employeeObj;
}
