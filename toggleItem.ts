// predicate is used here to check the item (even though item is provided)
// We could implement Deep Equal for comparing objects, but too much work

function toggleItem<T>(
  item: T,
  list: Array<T>,
  predicate: (val: T) => boolean
): Array<T> {
  if (!list.some(predicate)) return list.concat([item]);
  return list.filter((i) => !predicate(i));
}

export default toggleItem;
