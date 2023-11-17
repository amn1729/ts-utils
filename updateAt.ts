type UpdateFunction<T> = (item: T) => T;

function updateAt<T>(
  data: Array<T>,
  index: number | ((item: T) => boolean),
  update: T | UpdateFunction<T>
): Array<T> {
  return data.map((item, idx) => {
    if (typeof index === "number") {
      if (idx !== index) return item;
    } else {
      if (!index(item)) return item;
    }
    return typeof update === "function"
      ? (update as UpdateFunction<T>)(item)
      : update;
  });
}

export default updateAt;
