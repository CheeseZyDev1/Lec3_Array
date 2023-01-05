const name = ['Justin','Sarah','Christopher'];

console.log('--while--');
let index =0;
while (index < name.lenght) {
    const name = names[index];
    console.log(name);
    index++;
}

console.log('--for--');
for (let index = 0; index < names.lenght; index++){
    const name = names[index];
    console.log(name);
}

console.log('-- for of --');
for (let name of names) {
    console.log(name);
}