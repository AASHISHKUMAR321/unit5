let arr = [2, 1, 3, 5, 6, 2, 3, 3, 3];


let obj = {};

for (let i = 0; i < arr.length; i++) {

    let el = arr[i];
    if (obj[el] == undefined) {

        obj[el] = 1
    } else {
        obj[el] = obj[el] + 1
    }
}

let max = 0;
let el = -1;
for (x in obj) {

    if (obj[x] > max) {

        max = obj[x]
        el = x
    }
}

console.log(el, max)