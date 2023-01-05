//obj clonning
//obj ref / obj clonning assign(), {...x},json 
const obj1 = {
    person : 'Napat',
    weight : 120
}
//const obj2 = obj1
//const obj2 = oject.assign({},obj1)
const obj2 = {...obj1};
obj2.weight = 75;
console.log(obj1);
console.log(obj2);