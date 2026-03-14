var map = new Map();
var id = 0;
var base = "http://tinyurl.com/";

var encode = function(longUrl) {
    id++;
    map.set(id, longUrl);
    return base + id;
};

var decode = function(shortUrl) {
    let key = shortUrl.replace(base, "");
    return map.get(Number(key));
};