let slotsA = [
    [10, 50],
    [60, 120],
    [140, 210]
]
let slotsB = [
    [0, 15],
    [60, 70]
]
let dur = 8
output: [60, 68]

let A = [];
let B = [];

for (let i = 0; i < slotsA.length; i++) {


    A.push(slotsA[i][0])



}
for (let i = 0; i < slotsB.length; i++) {

    B.push(slotsB[i][1])



}


let left = 0;
let right = 0;

while (left < A.length && right < B.length) {

    if ((A[left] + dur) <= B[right]) {
        console.log([A[left], A[left] + dur])
        return
    } else {
        left++;
        right++;
    }

}