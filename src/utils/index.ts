/**
 * Input an object with key/values and this function will only return key/values where the value is truthy.
 * Useful for update methods where you don't want to pass a key with value of null or undefined.
 * @param obj an object with key/values
 * @returns an object with keys/values of only values that are truthy
 */
export function makeRecord(obj: object): object {
  let outputObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value) outputObj[key] = value;
  });

  return outputObj;
}
