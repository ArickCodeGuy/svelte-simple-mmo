const filterFunc = (v: any): boolean => {
  if (v === undefined) return false;
  if (v === null) return false;
  if (Array.isArray(v) && !v.length) return false;

  return true;
};

/**
 * Removes empty keys from object
 */
export function removeEmpty(obj: any): any {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => filterFunc(v))
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
  );
}
