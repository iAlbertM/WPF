//Albert Martinez
//08/14/2014
//Expressions_Industry

// Problem: Create a base rate of pay for a Freelancer in Web Design and Developement.
// Givens: To calculate this you need: (target salary + Associated Costs) / Billable hours
var targetSalary;
var associatedCosts;
var billableHours;
targetSalary = prompt("To calculate your base rate for you freelance web design and development business,\nPlease provide me with your target annual salary");
associatedCosts = prompt("Please enter your associated costs with your business (generally this is about 30% of your target salary");
billableHours = prompt("Enter your total billable hours");

//Results Variable:
var baseRate = (targetSalary + associatedCosts) / billableHours;

// Printed Output 
console.log("Congratulations! According to your $" + targetSalary + "target salary,\nYour associated costs of $" + associatedCosts + ",\nand your " + billableHours + " hours that you gave as billable hours,\n Your base rate of pay is $" + baseRate + " !");
alert("Congratulations! According to your $" + targetSalary + "target salary,\nYour associated costs of $" + associatedCosts + ",\nand your " + billableHours + " hours that you gave as billable hours,\n Your base rate of pay is $" + baseRate + " !");