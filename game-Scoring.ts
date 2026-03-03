function calculateGameScore(input: string): string | number | undefined {
  const pointsMap: Record<string, number> = {
    W: 3,
    D: 1,
    L: 0,
  };
  let totalScore = 0;
  let winStreak = 0;

  for (const char of input) {
    if (!(char in pointsMap)) {
      return "INVALID;";
    }
    totalScore += pointsMap[char];
    if (char === "W") {
      winStreak++;
      if (winStreak === 3) {
        totalScore += 2;
        winStreak = 0; // reset win streak after bonus
      }
    } else {
      winStreak = 0; // reset win streak if not a win
    }
  }
  return totalScore;
}

const testInputs = [
  "WLDLWWDL",
  "LDLWWWLDWWW",
  "DLWWWWLLDWD",
  "WWWLDDLW",
  "WALD",
];

testInputs.forEach((input) => {
  console.log(`Input: "${input}" => Output: ${calculateGameScore(input)}`);
});
