function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
var number1;
number1 = 5;
var number2;
number2 = 2.8;
var result = add(number1, number2);
console.log(result);
