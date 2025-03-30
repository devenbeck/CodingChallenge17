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