var MyHashMap = function () {
  this.hashmap = new Map();
};

MyHashMap.prototype.put = function (key, value) {
  this.hashmap.set(key, value);
};

MyHashMap.prototype.get = function (key) {
  if (this.hashmap.get(key) !== undefined) {
    return this.hashmap.get(key);
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  if (this.hashmap.get(key)) {
    this.hashmap.delete(key);
  }
};
