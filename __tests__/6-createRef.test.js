const createRef = require("../sections/6-createRef");

describe("createRef", () => {
  test("Returns an empty object when passed an empty array and two strings as arguments", () => {
    expect(createRef([], "name", "id")).toEqual({});
    expect(createRef([], "", "secretFear")).toEqual({});
    expect(createRef([], "", "")).toEqual({});
  });
  test("Returns an object with a single key value pair, when passed an array of a single object, and two strings", () => {
    expect(
      createRef(
        [{ name: "Rose", id: "dS8rJns", secretFear: "spiders" }],
        "name",
        "id"
      )
    ).toEqual({ Rose: "dS8rJns" });
  });
  test("Returns an object with multiple key value pairs when passed an array of more than one object, and two strings", () => {
    expect(
      createRef(
        [
          { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
          { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
        ],
        "name",
        "id"
      )
    ).toEqual({ Rose: "dS8rJns", Simon: "Pk34ABs" });
  });
  test("Returns an object with key value pairs equal to the values at the keys of the given input strings on the input array", () => {
    expect(
      createRef(
        [{ name: "Rose", id: "dS8rJns", secretFear: "spiders" }],
        "name",
        "secretFear"
      )
    ).toEqual({ Rose: "spiders" });
    expect(
      createRef(
        [
          { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
          { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
        ],
        "name",
        "secretFear"
      )
    ).toEqual({ Rose: "spiders", Simon: "mice" });
    expect(
      createRef(
        [
          { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
          { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
          { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
        ],
        "name",
        "secretFear"
      )
    ).toEqual({ Rose: "spiders", Simon: "mice", Jim: "bears" });
  });
  test("Returns an object where the number of it's key value pairs is equal to the length of the input array", () => {
    expect(
      createRef(
        [{ name: "Rose", id: "dS8rJns", secretFear: "spiders" }],
        "name",
        "id"
      )
    ).toEqual({ Rose: "dS8rJns" });
    expect(
      createRef(
        [
          { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
          { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
        ],
        "name",
        "id"
      )
    ).toEqual({ Simon: "Pk34ABs", Jim: "lk1ff8s" });
    expect(
      createRef(
        [
          { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
          { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
        ],
        "name",
        "secretFear"
      )
    ).toEqual({ Simon: "mice", Jim: "bears" });
    expect(
      createRef(
        [
          { name: "Rose", id: "dS8rJns", secretFear: "spiders" },
          { name: "Simon", id: "Pk34ABs", secretFear: "mice" },
          { name: "Jim", id: "lk1ff8s", secretFear: "bears" },
          { name: "David", id: "og8r0nV", secretFear: "Rose" },
        ],
        "name",
        "secretFear"
      )
    ).toEqual({ Rose: "spiders", Simon: "mice", Jim: "bears", David: "Rose" });
  });
});
