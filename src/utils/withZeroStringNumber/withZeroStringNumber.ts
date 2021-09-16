/**
 * withZeroStringNumber - return string from number, in case of smaller length add zeros at beggining
 * @param {() => number} func function
 * @param {number} length returned length of string number
 * @return {string}
 */
export const withZeroStringNumber =
  (func: () => number) =>
  (length = 2) => {
    const funcRes = func();

    if (funcRes.toString().length < length) {
      return new Array(length - funcRes.toString().length + 1).join('0') + funcRes.toString();
    }

    return funcRes.toString();
  };
