function minimumBribes(q: number[]): string {
  let totalBribes = 0;
  let chaotic = false;

  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      chaotic = true;
      break;
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        totalBribes++;
      }
    }
  }

  if (chaotic) {
    let resultBribes = calculateTotalBribes(q);
    return `${resultBribes}-too chaotic`;
  } else {
    return totalBribes.toString();
  }
}

function calculateTotalBribes(q: number[]): number {
  let bribes = 0;
  let arr = [...q];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        bribes++;
      }
    }
  }
  return bribes;
}

const testCase1 = [2, 6, 4, 1, 5, 3];
const testCase2 = [3, 2, 4, 5, 1, 6];

console.log("Output Test Case #1:", minimumBribes(testCase1));
console.log("Output Test Case #2:", minimumBribes(testCase2));
