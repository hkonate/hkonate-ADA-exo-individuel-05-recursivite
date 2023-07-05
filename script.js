const sum1 = (tab) => {
  let result = 0;
  for (const item of tab) {
    result += item;
  }
  return result;
};

// console.log(sum1([1, 5, 8, 9, 10])); // return 33

//Step2

const sum2 = (tab) => {
  if (tab.length === 1) return tab[0];
  return tab.pop() + sum2(tab);
};

// console.log(sum2([1, 5, 8, 9, 15])); // return 38

//Step 3

const factorial = (int) => {
  if (int === 1) return 1;
  return int * factorial(int - 1);
};

//console.log(factorial(5)); // return 120
