const userGrocery = [
    {
        name: prompt("What is the Grocery item?"),
        price: parseFloat(prompt("What is the Grocery item price?")) // Convert input to number
    }, 
    {
        name: prompt("What is the Grocery item?"),
        price: parseFloat(prompt("What is the Grocery item price?"))
    }, 
    {
        name: prompt("What is the Grocery item?"),
        price: parseFloat(prompt("What is the Grocery item price?"))
    }  
];

const totalMoney = parseFloat(prompt("How much money does the customer have?")); // Asking how much money the user has

const GroceryReturn = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].price; // Accumulating the total price of all groceries
    }
    return totalMoney - sum; // Calculate the remaining money
}

const remainingMoney = GroceryReturn(userGrocery); // Call the function
console.log("Your change is: $" + remainingMoney.toFixed(2)); // Output remaining money. i am using the .tofixed method to format the reamining number to 2 decimal places mimicing the convention you see in most grocery systems
