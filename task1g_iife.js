
(function() {
    const arr = [1, 2, 3, 2, 4, 5, 4, 6];
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
      }
    }
    console.log(`Array with duplicates removed: ${uniqueArr}`);
  })();
