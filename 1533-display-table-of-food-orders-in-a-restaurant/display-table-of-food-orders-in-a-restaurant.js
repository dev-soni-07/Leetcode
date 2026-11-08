
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    const foodItems = new Set();
    const tableOrders = new Map();
    for (const [customer, table, food] of orders) {
        foodItems.add(food);

        if (!tableOrders.has(table)) {
            tableOrders.set(table, new Map());
        }

        const foodCount = tableOrders.get(table);
        foodCount.set(food, (foodCount.get(food) || 0) + 1);
    }

    const sortedFoods = [...foodItems].sort();

    const sortedTables = [...tableOrders.keys()].sort(
        (a, b) => Number(a) - Number(b)
    );

    const result = [["Table", ...sortedFoods]];

    for (const table of sortedTables) {
        const foodCount = tableOrders.get(table);

        const row = [
            table,
            ...sortedFoods.map(food => String(foodCount.get(food) || 0))
        ];

        result.push(row);
    }

    return result;
};
