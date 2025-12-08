/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const m = primes.length;
  const ugly = new Array(n);
  ugly[0] = 1;

  const idx = new Array(m).fill(0);
  const vals = primes.slice();

  for (let i = 1; i < n; i++) {
    let next = Infinity;
    for (let j = 0; j < m; j++) {
      if (vals[j] < next) next = vals[j];
    }
    ugly[i] = next;

    for (let j = 0; j < m; j++) {
      if (vals[j] === next) {
        idx[j]++;
        vals[j] = ugly[idx[j]] * primes[j];
      }
    }
  }

  return ugly[n - 1];
};