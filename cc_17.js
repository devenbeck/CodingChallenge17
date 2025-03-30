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
const customer1 = new Customer("John Rambo", "rambo1776@gmail.com");
customer1.addPurchase(50);
console.log(`New customer created: ${customer1.name}, Total he spent: $${customer1.getTotalSpent()}`);

//Task 2: Create  a salesrep class
class SalesRep {
    constructor(name) {
        this.name = name; //add sales rep's name & clients
        this.clients = []; 
    };
//Create 2 methods:
// method 1 to add a customer to the list
    addClient(customer) {
        this.clients.push(customer);
    };
//method 2 to  find client by name and returns total spent
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client.getTotalSpent();
    };
};
// Log: Sales rep’s clients and total spent for a specific client
const salesRep1 = new SalesRep("Jim Brady");      //Create new sales rep
salesRep1.addClient(customer1);          //Add client under sales rep
console.log(`New Sales Rep Created: ${salesRep1.name}`); 
console.log(`${salesRep1.name}'s Clients: ${salesRep1.clients.map(client => client.name)}`);
console.log(`Total Spent by ${customer1.name} is $${salesRep1.getClientTotal("John Rambo")}`); //make sure there is no leading space in name or will error

//Task 3: Create a VIP Customer Class - extends Customer
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {  //includes all this
        super(name, email);
        this.vipLevel = vipLevel; };
getTotalSpent() {                    //Overide the getTotalSpent() method to return total spent including 10% loyalty bonus added
        const totalSpent = super.getTotalSpent();
        return totalSpent * 1.1; // 10% loyalty bonus
     };
};
//VIP customer's total spent with bonus
const vipCustomer1 = new VIPCustomer("Dave Bogner", "dave123bogner@gmail.com","Gold"); //Create a new VIP customer - have gold & platinum levels
vipCustomer1.addPurchase(200);   //lot of zeros after 220 in console
console.log(`New VIP Customer created: ${vipCustomer1.name} (${vipCustomer1.vipLevel})`); 
console.log(`Total Spent by ${vipCustomer1.name} (VIP ${vipCustomer1.vipLevel}) was $${vipCustomer1.getTotalSpent()}`); 

//Task 4: Build a Client Report System
//Store multiple customers (regular & vip and a sales rep)
const customer2 = new Customer("Andrew Schulyer", "asdschulyer@gmail.com");
const vipCustomer2 = new VIPCustomer("Amanda Tepole", "amandatp@gmail.com", "Platinum");
customer2.addPurchase(75);
vipCustomer2.addPurchase(500);

const customers = [customer1, customer2, vipCustomer1, vipCustomer2];

// Create a SalesRep and assign customers to him
const salesRep2 = new SalesRep("Liam MacRoy");
salesRep2.addClient(customer2);
salesRep2.addClient(vipCustomer2);
const salesReps = [salesRep1, salesRep2];
const totalRevenue = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0);
const highSpenders = customers.filter(customer => customer.getTotalSpent() > 500); //find the high spending customers
// Create customer summary
const customerSummary = customers.map(customer => ({
  name: customer.name,
  totalSpent: customer.getTotalSpent()
}));
// Log:  Total revenue, High-spending customers, Customer summary
console.log(`Total Revenue: $${totalRevenue}`);
console.log("High-Spending Customers:");
highSpenders.forEach(customer => console.log(`${customer.name} - $${customer.getTotalSpent()}`));
console.log("Customer Summary:");
customerSummary.forEach(summary => console.log(`Name: ${summary.name}, Total Spent: $${summary.totalSpent}`));