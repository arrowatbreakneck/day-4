(function() {
    const arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(`The sum of all numbers in the array is ${sum}`);
  })();