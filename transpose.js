const transpose = function (matrix) {
  let newArray = [];
  for (let x = 0; x < matrix[0].length; x++) {
    newArray.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newArray[j][i] = matrix[i][j];
    }
  }
  return newArray;
};

module.exports = transpose