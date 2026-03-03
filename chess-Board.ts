function solveChessboard(input: string): string | number {
  const lines = input.trim().split(/n+/);
  const n = parseInt(lines[0]);
  const coords = lines.slice(1);

  if (coords.length !== n * 2) return "x";
  const rowsUsed = new Set<number>();
  const colsUsed = new Set<number>();
  const occupiedTiles = new Set<string>();

  for (let i = 0; i < n; i++) {
    const row = parseInt(coords[i * 2]);
    const col = parseInt(coords[i * 2 + 1]);

    if (row < 1 || row > 8 || col < 1 || col > 8) return "x";
    const tileKey = `${row},${col}`;
    if (occupiedTiles.has(tileKey)) return "x";

    occupiedTiles.add(tileKey);
    rowsUsed.add(row);
    colsUsed.add(col);
  }
  const safeRows = 8 - rowsUsed.size;
  const safeCols = 8 - colsUsed.size;
  return safeRows * safeCols;
}

const input1 = "5, 2, 1, 3, 8, 4, 4, 6, 2, 7, 4";
const input2 = "3, 1, 3, 4, 9, 5, 2";
console.log(`Input: "${input1}" => Output: ${solveChessboard(input1)}`);
console.log(`Input: "${input2}" => Output: ${solveChessboard(input2)}`);
