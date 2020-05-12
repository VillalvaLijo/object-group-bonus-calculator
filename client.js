const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function EmployeePayroll(object) {
  this.name = object.name;
  if (object.reviewRating <= 2) {
    this.bonusPercentage = 0
    this.totalCompensation = parseInt(object.annualSalary);
  }
  else if (object.reviewRating == 3) {
    this.bonusPercentage = .04;
    this.totalBonus = parseInt(object.annualSalary) * .04;
    this.totalCompensation = parseInt(object.annualSalary) + this.totalBonus
  }
  else if (object.reviewRating == 4) {
    this.bonusPercentage = .06;
    this.totalBonus = parseInt(object.annualSalary) * .06;
    this.totalCompensation = parseInt(object.annualSalary) + this.totalBonus
}
  else if (object.reviewRating == 5) {
    this.bonusPercentage = .10;
    this.totalBonus = parseInt(object.annualSalary) * .10;
    this.totalCompensation = parseInt(object.annualSalary) + this.totalBonus
  }
}
//Test checkpoint bonus percentage based on reviewRating
let employee1 = new EmployeePayroll({
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
});
  let employee2 = new EmployeePayroll({
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  });
  
  let employee3 = new EmployeePayroll({
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  });
  let employee4 = new EmployeePayroll({
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  });
  let employee5 = new EmployeePayroll({
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  });
console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//console.log( employees );
