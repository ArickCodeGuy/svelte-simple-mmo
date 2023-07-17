export const randomItemFromArray = <T = unknown>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];
