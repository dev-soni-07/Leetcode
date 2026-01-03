/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  if (!nums1.length || !nums2.length || k === 0) return [];

  const result = [];
  const heap = [];

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    heap.push([nums1[i] + nums2[0], i, 0]);
  }

  const swap = (i, j) => ([heap[i], heap[j]] = [heap[j], heap[i]]);

  const heapifyUp = (i) => {
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (heap[p][0] <= heap[i][0]) break;
      swap(p, i);
      i = p;
    }
  };

  const heapifyDown = (i) => {
    while (true) {
      let smallest = i;
      let left = i * 2 + 1;
      let right = i * 2 + 2;

      if (left < heap.length && heap[left][0] < heap[smallest][0])
        smallest = left;
      if (right < heap.length && heap[right][0] < heap[smallest][0])
        smallest = right;

      if (smallest === i) break;
      swap(i, smallest);
      i = smallest;
    }
  };

  const push = (item) => {
    heap.push(item);
    heapifyUp(heap.length - 1);
  };

  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    heapifyDown(0);
    return top;
  };

  while (k > 0 && heap.length) {
    const [sum, i, j] = pop();
    result.push([nums1[i], nums2[j]]);
    k--;

    if (j + 1 < nums2.length) {
      push([nums1[i] + nums2[j + 1], i, j + 1]);
    }
  }

  return result;
};
