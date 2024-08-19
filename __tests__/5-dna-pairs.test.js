const dnaPairs = require("../sections/5-dna-pairs");

describe("dnaPairs()", () => {
  test("Returns an empty array when passed an empty string", () => {
    //arrange
    const input = "";
    //act
    const actual = dnaPairs(input);
    //assert
    expect(actual).toEqual([]);
  });
  test("Returns a nested array of a paired DNA match when given a string of one letter.", () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
    expect(dnaPairs("C")).toEqual([["C", "G"]]);
    expect(dnaPairs("A")).toEqual([["A", "T"]]);
    expect(dnaPairs("T")).toEqual([["T", "A"]]);
  });
  test("Returns an array with two nested arrays of paired DNA matches when given a string of two letters.", () => {
    expect(dnaPairs("GC")).toEqual([
      ["G", "C"],
      ["C", "G"],
    ]);
    expect(dnaPairs("CG")).toEqual([
      ["C", "G"],
      ["G", "C"],
    ]);
    expect(dnaPairs("AT")).toEqual([
      ["A", "T"],
      ["T", "A"],
    ]);
    expect(dnaPairs("TA")).toEqual([
      ["T", "A"],
      ["A", "T"],
    ]);
  });
  test("Returns an array with more than one nested array of paired DNA matches when given a string of more than one letter.", () => {
    expect(dnaPairs("GATC")).toEqual([
      ["G", "C"],
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
    ]);
    expect(dnaPairs("TCG")).toEqual([
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
    ]);
    expect(dnaPairs("CAT")).toEqual([
      ["C", "G"],
      ["A", "T"],
      ["T", "A"],
    ]);
    expect(dnaPairs("TAGCT")).toEqual([
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
      ["C", "G"],
      ["T", "A"],
    ]);
  });
});
