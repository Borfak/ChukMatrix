# ChukMatrix - a Math Matrix calculator

## Description:
 ChukMatrix is a kind of toolbox for performing simple operations with algebraic matrices on JS;
 Matrices are presented with TAMM (two-dimensional arrays matrix model);
 For correct working your matrix must match this syntax:
 let matrix = [[1, 0, 1], [0, 1, 0], [1, 0, 1]], where every new internal array is a new matrix row;
 for better understanding you may write like this:
 let matrix = [
 [1, 0, 1],
 [0, 1, 0],
 [1, 0, 1]
 ]
 

## Documentation:
### 1) checkValid(a): checks if the matrix is valid by comparing the amount of every row element with the first one;
 if the matrix is valid, you may get some useful information like size and shape;
 Example:
 Matrix.checkValid(matrix1)
 Output:
 This matrix is valid!
 This matrix is 3x3
 This matrix is square

### 2) checkValidDiff(a, b): checks if the matrices have the same size to perform additive operations;
 Example:
 Matrix.checkValidDiff(matrix1, matrix2)
 Output:
 Matrices are match!

### 3) minus(a, b) and plus(a, b): performing addition and substraction operations;
 Example:
 Matrix.minus(matrix1, matrix2)
 Output:
 -14,-13,7
 7,0,2
 0,8,-5

### 4) selfMultiply(a, n): performs multiplying of each element of a matrix by n (number)
 Example:
 Matrix.selfMultiply(matrix1, 2)
 Output:
 This matrix is valid!
 This matrix is 3x3
 This matrix is square
 This matrix after multiplication:
 3,-3,3
 -6,0,6
 9,15,-6

### 5) transpose(a): performs transposing of a matrix
 Example:
 Matrix.transpose(a)
 Output:
 Matrix after transposing:
 1,-2,3
 -1,0,5
 1,2,-2

### 6) multiply(a, b): multiplies the matrix a by the matrix b
 Example:
 Matrix.multiply(matrix1, matrix2)
 Output:
 Result after multiplication:
 27,9,-3
 -24,-30,18
 -6,42,-24

### 7) determ (a): counts the determiner of the matrix a
 Example:
 let matrix1 = [
  [1, 2, 3],
  [3, -1, 4],
  [1, 2, 4]
 ]
 Matrix.determ(matrix1)
 Output:
 The determinator of this matrix is: -7

### 8) reverse (a): finds reversed to matrix to matrix a
 Example:
 Matrix.reverse(matrix1)
 Output:
 det A = -2 * 2 * 1 + -1 * -3 * 0 + 4 * -1 * 1 - -1 * 2 * -1 - -2 * 0 * 1 - 1 * 4 * -3 = 2
 The determiner of this matrix is: 2
 Matrix after minoring:
 2,-4,6
 2,-3,5
 2,-4,8
 Matrix after transposing:
 2,2,2
 -4,-3,-4
 6,5,8
Reversed matrix:
2/2,2/2,2/2
-4/2,-3/2,-4/2
6/2,5/2,8/2
