/**
 * First id is 1
 * @returns a simple number generator
 */
export default function () {
  let id = 0;
  return () => (id += 1);
}
