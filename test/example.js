const LRUCache = require("../src/LRUCache");

const cache = new LRUCache(2);

console.log("LRU Cache Test");
console.log("----------------");

cache.put("A", 10);
console.log('put("A", 10)');

cache.put("B", 20);
console.log('put("B", 20)');

console.log('get("A") ->', cache.get("A"));

cache.put("C", 30);
console.log('put("C", 30)');
console.log("B was evicted because it was the least recently used item");

console.log('get("B") ->', cache.get("B"));
console.log('get("C") ->', cache.get("C"));
console.log('get("A") ->', cache.get("A"));