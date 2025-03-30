//Task 1: Create a customer class
class Customer {
    constructor (name, email) {
        this.name = name;           //add these 2 strings
        this.email = email;
        this.purchaseHistory = [];   //add this array
    };     //2 methods should be added
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    };
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}
//log new customer creation and total spent
const customer1 = new Customer(" John Rambo", "rambo1776@gmail.com");
customer1.addPurchase(50);
console.log(`New customer created: ${customer1.name}, Total he spent: $${customer1.getTotalSpent()}`);