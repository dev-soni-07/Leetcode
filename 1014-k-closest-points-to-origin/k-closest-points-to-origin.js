/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heap = [];

    const push = (item) => {
        heap.push(item);

        let i = heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (heap[parent][0] >= heap[i][0]) break;

            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };

    const pop = () => {
        const top = heap[0];
        const last = heap.pop();

        if (heap.length > 0) {
            heap[0] = last;

            let i = 0;

            while (true) {
                let largest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;

                if (
                    left < heap.length &&
                    heap[left][0] > heap[largest][0]
                ) {
                    largest = left;
                }

                if (
                    right < heap.length &&
                    heap[right][0] > heap[largest][0]
                ) {
                    largest = right;
                }

                if (largest === i) break;

                [heap[i], heap[largest]] = [heap[largest], heap[i]];
                i = largest;
            }
        }

        return top;
    };

    for (const [x, y] of points) {
        const distance = x * x + y * y;

        push([distance, [x, y]]);

        if (heap.length > k) {
            pop();
        }
    }

    return heap.map(item => item[1]);
};