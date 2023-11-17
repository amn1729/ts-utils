class MatchObj {
  test: string;
  constructor(testValue: string) {
    this.test = testValue;
  }

  cases<T>(values: Record<string, T> & { _: T }): T {
    return values[this.test] || values["_"];
  }
}

function match(v: string | number): MatchObj {
  return new MatchObj(v.toString());
}

export default match;

// Example usage
// match(2).cases({
//     1: "one",
//     2: "two",
//     _: "three",
// }) //=> "two"
