/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let outgoing = new Set();


    for (let path of paths){
        outgoing.add(path[0]);
    }

    for (let path of paths){
        if(!outgoing.has(path[1])){
            return path[1];
        }
    }
};