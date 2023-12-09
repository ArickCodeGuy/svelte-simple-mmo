const dropRateDictionary: { v: number; s: string }[] = [
  { v: 0.1, s: 'Often' },
  { v: 0.01, s: 'Rare' },
  { v: 0.001, s: 'Very Rare' },
  { v: 0, s: 'Good Luck' },
];

export const dropRateToString = (dropRate: number) => {
  for (const i of dropRateDictionary) {
    if (dropRate > i.v) {
      return i.s;
    }
  }

  return dropRateDictionary[dropRateDictionary.length - 1].s;
};
