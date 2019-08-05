// 1

function Person(first, last, middle) {
    this.firstName = first;
    this.lastName = last;
    this.middle = middle;
}
Person.prototype.fullname = function fullname() {
    console.log(`My name is ${this.firstName}`);

}

let spiderman = new Person("Peter", "Parker", "Spidey")
let mj = new Person("Mary", "Wattson", "Jane")
console.log(spiderman.firstName);
console.log(spiderman.fullname());
console.log(mj.fullname());
