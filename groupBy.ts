function groupBy<T extends Record<string, any>>(
  data: Array<T>,
  key: keyof T
): Record<keyof T, Array<T>> {
  return data.reduce((grouped, d) => {
    let gData = grouped[d[key]];
    return { ...grouped, [d[key]]: gData ? gData.concat(d) : [d] };
  }, {} as Record<keyof T, Array<T>>);
}
export default groupBy;

/* Example
let data = [
  { name: "a", age: 10 },
  { name: "b", age: 20 },
  { name: "c", age: 10 },
];
console.log(groupBy(data, "age"));
{
  '10': [ { name: 'a', age: 10 }, { name: 'c', age: 10 } ],
  '20': [ { name: 'b', age: 20 } ]
}
*/
