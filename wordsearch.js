// Pair programming exercise completed with Andrew Stefankiv

// function that returns the transposed matrix as a new array
const transpose = function(matrix) {
  let matrix2 = [];
  matrix[0].map(() => matrix2.push([]));
  matrix.map((element, i) =>
    matrix[i].map((element, j) =>
      matrix2[j][i] = matrix[i][j]));
  return matrix2;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // transposing and joining horizontally to search using same method as above
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;