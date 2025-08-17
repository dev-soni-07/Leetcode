class MinHeap {
  constructor(arr = []) {
    this.heap = arr;
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this.#heapifyDown(i);
    }
  }

  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.#heapifyDown(0);
    }
    return min;
  }

  push(val) {
    this.heap.push(val);
    this.#heapifyUp(this.heap.length - 1);
  }

  peek() {
    return this.heap[0];
  }

  #heapifyUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  #heapifyDown(i) {
    const n = this.heap.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < n && this.heap[l] < this.heap[smallest]) smallest = l;
      if (r < n && this.heap[r] < this.heap[smallest]) smallest = r;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

var minOperations = function(nums, k) {
  const heap = new MinHeap(nums);
  let operations = 0;

  while (heap.peek() < k) {
    const x = heap.pop();
    const y = heap.pop();
    const combined = Math.min(x, y) * 2 + Math.max(x, y);
    heap.push(combined);
    operations++;
  }
  return operations;
};
