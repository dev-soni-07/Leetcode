/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
    const n = points.length;
    const groups = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            const midX = x1 + x2;
            const midY = y1 + y2;

            const dx = x1 - x2;
            const dy = y1 - y2;
            const dist2 = dx * dx + dy * dy;

            const key = `${midX},${midY},${dist2}`;

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push([i, j]);
        }
    }

    let ans = Infinity;

    for (const diagonals of groups.values()) {
        for (let i = 0; i < diagonals.length; i++) {
            for (let j = i + 1; j < diagonals.length; j++) {
                const [a, c] = diagonals[i];
                const [b, d] = diagonals[j];

                const A = points[a];
                const B = points[b];
                const C = points[c];

                const abX = A[0] - B[0];
                const abY = A[1] - B[1];

                const bcX = C[0] - B[0];
                const bcY = C[1] - B[1];

                const side1 = Math.sqrt(abX * abX + abY * abY);
                const side2 = Math.sqrt(bcX * bcX + bcY * bcY);

                const area = side1 * side2;

                ans = Math.min(ans, area);
            }
        }
    }

    return ans === Infinity ? 0 : ans;
};