/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let res = [];

    function dfs(path) {
        if (path.length === n) {
            res.push(path);
            return;
        }

        if (path.length === 0) {
            dfs(path + "0");
            dfs(path + "1");
        } else {
            let last = path[path.length - 1];
            if (last === "0") {
                dfs(path + "1");
            } else {
                dfs(path + "0");
                dfs(path + "1");
            }
        }
    }

    dfs("");
    return res;
};
