export function cropString(str, length) {
  const newStr = str
    .split(" ")
    .reduce((acc, cur) => {
      if (acc.length < length) {
        return `${acc} ${cur}`;
      }
      return acc;
    }, "")
    .trim();

  return newStr.length === str.length ? str : `${newStr}...`;
}
