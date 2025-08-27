'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let zeros = 0;
    let numerosPosi = 0;
    let numerosNeg = 0;
    for (let i = 0; i<arr.length;i++){
        if(arr[i] > 0){
            numerosPosi++;
        }
        else if(arr[i]<0){
            numerosNeg++;
        }else{
            zeros++;
        }
    }
    console.log(numerosPosi / arr.length);
    console.log(numerosNeg / arr.length);
    console.log(zeros / arr.length);
}
    
    // for(let i =0;i<arr.length;i++){
    //     resultado = arr[i] / arr.length;
    // }
    // return resultado;}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
