import { Some } from "./Some";

function padZero(str: string | number, length: number = 2): string {
  let paddedString = Some.String(str);
  while (paddedString.length < length) {
    paddedString = "0" + paddedString;
  }
  return paddedString;
}

export default padZero;
