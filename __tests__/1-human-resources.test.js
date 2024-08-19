const {
  createPoll,
  makeNameTags,
} = require("../sections/1-human-resources.js");
const pollData = require("../data/poll-data.js");

describe("makeNameTags", () => {
  test("Returns an empty array when given an empty array as an argument", () => {
    expect(makeNameTags([])).toEqual([]);
  });
  test("Returns an array with one object with an additional nameTag key when given an array with one object", () => {
    expect(
      makeNameTags([
        {
          title: "Mr",
          forename: "Sam",
          surname: "Caine",
          age: 30,
          company: "Northcoders",
        },
      ])
    ).toEqual([
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
        nameTag: "Mr Sam Caine, Northcoders",
      },
    ]);
  });
  test("Returns an array of more than one object with an additional nameTag key when given an array of more than one object", () => {
    expect(
      makeNameTags([
        {
          title: "Mr",
          forename: "Sam",
          surname: "Caine",
          age: 30,
          company: "Northcoders",
        },
        {
          title: "Mr",
          forename: "Kermit",
          surname: "The Frog",
          age: 35,
          company: "Jim Henson Studios",
        },
      ])
    ).toEqual([
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
        nameTag: "Mr Sam Caine, Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
        nameTag: "Mr Kermit The Frog, Jim Henson Studios",
      },
    ]);
  });
});

describe("createPoll", () => {
  test("Returns an empty object when passed an empty array", () => {
    expect(createPoll([])).toEqual({});
  });
  test("Returns an object with a single key equal to the array string, and a value equal to the number of times that string appears when passed an array with one string included multiple times", () => {
    expect(createPoll(["apple", "apple", "apple"])).toEqual({ apple: 3 });
    expect(createPoll(["pear", "pear"])).toEqual({ pear: 2 });
  });
  test("Returns an object with keys equal to unique strings in the input array, and a value equal to the number of times that string appears in the array, when passed an array with more than one string", () => {
    expect(createPoll(["apple", "pear"])).toEqual({ apple: 1, pear: 1 });
    expect(
      createPoll(["pear", "pear", "apple", "banana", "orange", "orange"])
    ).toEqual({
      pear: 2,
      apple: 1,
      banana: 1,
      orange: 2,
    });
    expect(createPoll(pollData)).toEqual({
      apple: 276,
      pear: 223,
      banana: 263,
      orange: 238,
      "lonesome plum": 1,
    });
  });
});
