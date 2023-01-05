let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

let commonValues = values1.concat(values2,values3).filter((val,indx,arr)=>
{
    return arr.includes(val);
});
console.log("add common element",commonValues );  // ['Apple']
 