console.log('------------- # 4');
function sum(num1, num2) {
    console.log(num1 + num2);
}
function sub(num1, num2) {
    console.log(num1 - num2);
}
function mul(num1, num2) {
    console.log(num1 * num2);
}
function div(num1, num2) {
    console.log(num1 / num2);
}
sum(3, 8);
sub(8, 3);
mul(3, 8);
div(8, 3);

console.log('------------- # 5');
function asc(n) {
    for (let i = 1; i < n; i++) {
        console.log(i);
    }
}
asc(6);

console.log('------------- # 6');
function desc(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
desc(5);

console.log('------------- # 7');
function pow(x, n) {
    console.log(x ** n);
}
pow(3, 2);

console.log('------------- # 8');
function isBigger(num1, num2) {
    if(num1 > num2) {
        return true;
    } else {
        return false;
    }
}
console.log(isBigger(5, -1));

console.log('------------- # 9');
function isSmaller(num1, num2) {
    if(num1 < num2) {
        return true;
    } else {
        return false;
    }
}
console.log(isSmaller(5, -1));

