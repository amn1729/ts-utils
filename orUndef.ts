function orUndef<T, V>(test: T, value: V) {
  return !test ? undefined : value;
}

export default orUndef;
