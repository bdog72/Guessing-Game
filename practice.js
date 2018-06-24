// // // Functions

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years');
  } else {
    console.log(firstName + ' is already retired');
  }
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

// // // ************** Function Statments and Expressions ***********************

// // // Function declaration *****
function whatDoYouDo(job, firstName) {}

// // Function expression
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
};
console.log(whatDoYouDo('teacher', 'Brian'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Bozo'));

// // // Arrays *******

// // Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);

// // Modify array data
names[1] = 'Bozo';
names[8] = 'Beak';
console.log(names);

// // Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr');
console.log(john);
john.pop();
console.log(john);

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.5;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];
var finalValues = [
  bills[0] + bills[0],
  bills[1] + bills[1],
  bills[2] + bills[2]
];
console.log(tips, finalValues);

// Objects And Properties

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: '1972',
  family: ['Jane', 'Molly', 'Crystal', 'Marci'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

/********** 
  Objects and Methods
**********/

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: '1972',
  family: ['Jane', 'Molly', 'Crystal', 'Marci'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};
john.calcAge();
console.log(john);

var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
john.calcBMI();
mark.calcBMI();

console.log(john, mark);

if (john.bmi > mark.bmi) {
  console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
  console.log('They have the same bmi');
}

// Loops and Iterations

for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

john.calcTips();
console.log(john);

// Hoisting

calculateAge(1965);

function calculateAge(year) {
  console.log(2016 - year);
}

var retirement = function(year) {
  console.log(65 - (2016 - year));
};

var age = 23;
console.log(age);

var a = 'Hello!';
first();
function first() {
  var b = 'Hi!';
  second();
  function second() {
    var c = 'Hey!';
    console.log(a + ' ' + b + ' ' + c);
  }
}

console.log(this);

console.log('------------------------------------');
console.log("'This' keyword");
console.log('------------------------------------');

calculateAge(1985);
function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}
