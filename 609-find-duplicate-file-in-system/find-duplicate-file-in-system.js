/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    const map = new Map();

    for (let path of paths) {
        const parts = path.split(" ");
        const dir = parts[0];

        for (let i = 1; i < parts.length; i++) {
            const file = parts[i];
            const start = file.indexOf("(");
            const end = file.indexOf(")");

            const name = file.substring(0, start);
            const content = file.substring(start + 1, end);

            const fullPath = dir + "/" + name;

            if (!map.has(content)) {
                map.set(content, []);
            }

            map.get(content).push(fullPath);
        }
    }

    const result = [];

    for (let files of map.values()) {
        if (files.length > 1) {
            result.push(files);
        }
    }

    return result;
};