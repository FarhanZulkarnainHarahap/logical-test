function isValidString(s: string): "YES" | "NO" {
  if (s.length === 0) return "YES";

  const charCounts: Record<string, number> = {};
  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  const freqMap: Record<number, number> = {};
  const counts = Object.values(charCounts);
  for (const count of counts) {
    freqMap[count] = (freqMap[count] || 0) + 1;
  }

  const distinctFreqs = Object.keys(freqMap).map(Number);

  if (distinctFreqs.length === 1) return "YES";

  if (distinctFreqs.length !== 2) return "NO";

  const [f1, f2] = distinctFreqs;
  const [c1, c2] = [freqMap[f1], freqMap[f2]];

  if (
    (f1 === 1 && c1 === 1) ||
    (f2 === 1 && c2 === 1) ||
    (f1 - f2 === 1 && c1 === 1) ||
    (f2 - f1 === 1 && c2 === 1)
  ) {
    return "YES";
  }

  return "NO";
}

console.log(isValidString("aabbccddeefghi"));
console.log(isValidString("abcdefghhgfedecba"));
