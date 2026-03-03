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

  // Kondisi 1: Semua karakter punya frekuensi sama
  if (distinctFreqs.length === 1) return "YES";

  // Kondisi 2: Ada lebih dari 2 jenis frekuensi berbeda (pasti tidak valid)
  if (distinctFreqs.length !== 2) return "NO";

  const [f1, f2] = distinctFreqs;
  const [c1, c2] = [freqMap[f1], freqMap[f2]];

  // Kondisi 3: Cek apakah bisa jadi valid dengan menghapus 1 karakter
  if (
    (f1 === 1 && c1 === 1) ||
    (f2 === 1 && c2 === 1) || // Satu karakter frekuensi 1 dan cuma ada 1 biji
    (f1 - f2 === 1 && c1 === 1) ||
    (f2 - f1 === 1 && c2 === 1) // Selisih frekuensi cuma 1 dan hanya pada 1 karakter
  ) {
    return "YES";
  }

  return "NO";
}

// Pengujian Test Case dari Gambar
console.log(isValidString("aabbccddeefghi")); // Output: NO
console.log(isValidString("abcdefghhgfedecba")); // Output: YES
