export type ValueOf<T> = T[keyof T];

export type Dictionary = Record<string, DictionaryKey>;

export type DictionaryKey = Record<string, string>;
