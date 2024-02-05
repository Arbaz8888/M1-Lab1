let num1 = prompt("Enter the first integer:");
let num2 = prompt("Enter the second integer:");

if (num1 > num2) {
    alert(`The larger number is: ${num1}`);
} else if (num2 > num1) {
    alert(`The larger number is: ${num2}`);
} else {
    alert("The two numbers are equal.");
}
