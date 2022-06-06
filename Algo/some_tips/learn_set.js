const my_set = new Set([5, 4, 2, 3, 9]);
// console.log(my_set);
my_set.add(7);
my_set.add(7);
my_set.add(true);
my_set.add(true);
my_set.add("ok");
// console.log(my_set);
let obj = { prenom: "sarah" }
my_set.add(obj);
my_set.add(obj);
for(let [key,value] of my_set.entries()) console.log(`${key} : ${value}`);
// my_array = Array.from(my_set)
// console.log(my_array)
