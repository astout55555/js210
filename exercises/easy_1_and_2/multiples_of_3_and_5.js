function multisum(maxNumber) {
  let sum = 0;

  for (let i = 1; i <= maxNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  console.log(sum); // return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
