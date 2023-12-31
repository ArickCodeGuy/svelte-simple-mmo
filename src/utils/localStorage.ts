export const writeToLocalStorage = <T>(key: string, v: T): void => {
  localStorage.setItem(key, JSON.stringify(v));
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  const json = localStorage.getItem(key);

  const v = json ? JSON.parse(json) : (null as T | null);

  return v;
};
