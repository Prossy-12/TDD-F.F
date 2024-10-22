// factorial.js
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    if (n < 0) throw new Error("Factorial is not defined for negative numbers");
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}
module.exports = { factorial };
