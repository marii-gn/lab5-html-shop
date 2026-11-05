function runTask1() {
  console.clear();
  console.log("Завдання 1 (Товари)");
  console.log("1.1:", sortAndAverageByCountry(products, "Україна"));
  console.log("1.2:", findMinPrice2Id(products));
  console.log("1.4:", getPriceDynamics(products));
}

function runTask2() {
  console.clear();
  console.log("Завдання 2 (Користувачі)");
  console.log("2.1:", filterUsersByMonthAndTime(users, 3, "15:30"));
  analyzeUserAge(users);
  categorizeUsers(users);
  sortUsers(users);
}

function runDemo() {
  runTask1();
  runTask2();
}