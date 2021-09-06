const budgetArr = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const limits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => limits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();
  if (value <= getLimit(user))
    budgetArr.push({ value: -value, description, user });
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budgetArr);

const checkLimit = function () {
  //budgetArr.foreach() ?
  for (const entry of budgetArr) {
    // const limit = limits[entry.user] ? limits[entry.user] : 0;
    // if (limits[entry.user]) {
    //   limit = limits[entry.user];
    // } else {
    //   limit = 0;
    // }
    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkLimit();

console.log(budgetArr);

const bigExpenses = function (limit) {
  let output = '';
  for (const entry of budgetArr) {
    // if (entry.value <= -limit) {
    //   output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
    // }
    output += entry.value <= -limit ? entry.description.slice(-2) + ' / ' : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

bigExpenses(1000);
