import LinkedList from "./linkedList.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log(list.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> null
console.log(list.size()); // 3
console.log(list.contains(2)); // true
console.log(list.contains(4)); // false

list.pop();
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> null

list.prepend(0);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> null

console.log(list.at(1).value); // 1
console.log(list.size()); // 3
