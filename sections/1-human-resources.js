function makeNameTags(guestArr) {
  if (guestArr.length === 0) {
    return guestArr;
  }

  return guestArr.map((guest) =>
    Object.assign(guest, {
      nameTag: `${guest.title} ${guest.forename} ${guest.surname}, ${guest.company}`,
    })
  );
}

// to change each object in the array
// map to create a new array with desired output
// declare object / define guest
// add the new key - find a method
// do this using variables of existing keys (given)
// string concatenation
// a new array with edited objects will be returned

function createPoll(arr) {
  if (arr.length === 0) {
    return {};
  }

  if (arr.length === 1) {
    const objOne = {};
    Object.assign(objOne, { [arr[0]]: 1 });
    return objOne;
  }

  const countItemsObj = {};

  for (let ele of arr) {
    if (countItemsObj[ele]) {
      countItemsObj[ele] += 1;
    } else {
      countItemsObj[ele] = 1;
    }
  }
  console.log(countItemsObj);
  return countItemsObj;
}
// takes an array of strings
// returns an object

// each key will be a string in the original array
// each key value will be the number of times that key appears

// declare empty object
// use a for loop to count and add values of repeats to object
// do this by element!

// return object

module.exports = { makeNameTags, createPoll };
