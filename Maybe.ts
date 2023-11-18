export type Just<T> = {
  value: T;
  _type: "just";
};

export type Nothing = {
  value: undefined;
  _type: "nothing";
};

function toJust<T>(value: T): Just<T> {
  return { value: value, _type: "just" };
}
const nothing: Nothing = { value: undefined, _type: "nothing" };

export type Maybe<T> = {
  value: Just<T> | Nothing;
  run: <U>(fn: (val: T) => U) => Maybe<U>;
  unwrap: (fallback: T) => T;
};

function run<T, U>(value: Maybe<T>["value"], fn: (val: T) => U): Maybe<U> {
  if (value._type === "nothing") return toMaybe<U>(undefined);
  return toMaybe<U>(fn(value.value));
}

export function toMaybe<T>(value: T | undefined): Maybe<T> {
  let v = (value !== undefined ? toJust(value) : nothing) as Maybe<T>["value"];
  return {
    value: v,
    run: <U>(fn: (val: T) => U) => run(v, fn),
    unwrap: (fallback: T) => value || fallback,
  };
}
