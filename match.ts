type TestValue = string | number | boolean;

class MatchObj {
  test: TestValue;
  constructor(testValue: TestValue) {
    this.test = testValue;
  }

  cases<T>(values: Record<string, T> & { _: T }): T {
    return values[this.test.toString()] || values["_"];
  }

  with<T>(defaultCase: T, ...arrayOfCases: Array<[TestValue, T]>): T {
    let caseFound = arrayOfCases.find((c) => c[0] === this.test);
    return caseFound ? caseFound[1] : defaultCase;
  }
}

function match(v: TestValue): MatchObj {
  return new MatchObj(v);
}

export default match;

// Example usage
// match(2).cases({
//     1: "one",
//     2: "two",
//     _: "three",
// }) //=> "two"
