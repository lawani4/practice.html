1)

let loggedInUsers = 0;
let usersWith50OrMorePoints = 0;

for (const user of Object.values(users)) {

  if (user.isLoggedIn) {
    loggedInUsers++;
  }

  if (user.points >= 50) {
    usersWith50OrMorePoints++;
  }
}

console.log("Logged in:", loggedInUsers);
console.log("50+ points:", usersWith50OrMorePoints);

2)

for (const [name, user] of Object.entries(users)) {

  if (
    user.skills.includes("MongoDB") &&
    user.skills.includes("Express") &&
    user.skills.includes("React") &&
    user.skills.includes("Node")
  ) {
    console.log(name);
  }
}

3)

const newUsers = {
  ...users,
  tommy: {
    email: "tommy@fun.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 21,
    isLoggedIn: false,
    points: 0
  }
};

console.log(newUsers);

4)

const newUsers = {
  ...users,
  Lawani: {
    email: "tommy@example.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 21,
    isLoggedIn: false,
    points: 0
  }
};

console.log(newUsers);

5)

const personAccount = {
  firstName: "Tommy",
  lastName: "Ratia",

  incomes: {
    salary: 100000,
    freelance: 50000
  },

  expenses: {
    food: 20000,
    transport: 10000
  },

  totalIncome() {
    return Object.values(this.incomes).reduce(
      (total, income) => total + income,
      0
    );
  },

  totalExpense() {
    return Object.values(this.expenses).reduce(
      (total, expense) => total + expense,
      0
    );
  },

  accountInfo() {
    return `${this.firstName} ${this.lastName}`;
  },

  addIncome(description, amount) {
    this.incomes[description] = amount;
  },

  addExpense(description, amount) {
    this.expenses[description] = amount;
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};

6)

function signUp(newUser) {

  const userExists = users.some(
    user => user.email === newUser.email
  );

  if (userExists) {
    return "User already has an account.";
  }

  users.push(newUser);

  return "User registered successfully.";
}

7)

function rateProduct(productId, userId, rate) {

  const product = products.find(
    product => product._id === productId
  );

  if (!product) {
    return "Product not found.";
  }

  product.ratings.push({
    userId: userId,
    rate: rate
  });

  return "Product rated successfully.";
}

8)

function averageRating(productId) {

  const product = products.find(
    product => product._id === productId
  );

  if (!product) {
    return "Product not found.";
  }

  if (product.ratings.length === 0) {
    return 0;
  }

  const total = product.ratings.reduce(
    (sum, rating) => sum + rating.rate,
    0
  );

  return total / product.ratings.length;
}

9)

function likeProduct(productId, userId) {

  const product = products.find(
    product => product._id === productId
  );

  if (!product) {
    return "Product not found.";
  }

  const userIndex = product.likes.indexOf(userId);

  if (userIndex === -1) {
    product.likes.push(userId);
    return "Product liked.";
  }

  product.likes.splice(userIndex, 1);
  return "Product unliked.";
}