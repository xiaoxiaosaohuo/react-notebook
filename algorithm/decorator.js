function Cat() {}
Object.defineProperty(Cat.prototype, "say", {
    value: function() { console.log("meow ~"); },
    enumerable: false,
    configurable: true,
    writable: true
});
console.log(Cat)