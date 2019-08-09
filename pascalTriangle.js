function printPascalTriangle(rows) {
  var arr = [];

  for (var i = 0; i < rows; i++) {
    arr[i] = [];

    for (var j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }

  return arr;
}

console.table(printPascalTriangle(5));
