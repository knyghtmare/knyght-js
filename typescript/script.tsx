function add(num1: number, num2: number) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}

let number1 : number;
number1 = 5;
let number2: number;
number2 = 2.8;

const result = add(number1, number2);
console.log(result);