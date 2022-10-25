/*********************
 Documentation:

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

 ***

 Methods:

 1) checkValid(a): checks if the matrix is valid by comparing the amount of every row element with the first one;
 if the matrix is valid, you may get some useful information like size and shape;
 Example:
 Matrix.checkValid(matrix1)
 Output:
 This matrix is valid!
 This matrix is 3x3
 This matrix is square

 2) checkValidDiff(a, b): checks if the matrices have the same size to perform additive operations;
 Example:
 Matrix.checkValidDiff(matrix1, matrix2)
 Output:
 Matrices are match!

 3) minus(a, b) and plus(a, b): performing addition and substraction operations;
 Example:
 Matrix.minus(matrix1, matrix2)
 Output:
 -14,-13,7
 7,0,2
 0,8,-5

 4) selfMultiply(a, n): performs multiplying of each element of a matrix by n (number)
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

 5) transpose(a): performs transposing of a matrix
 Example:
 Matrix.transpose(a)
 Output:
 Matrix after transposing:
 1,-2,3
 -1,0,5
 1,2,-2

 6) multiply(a, b): multiplies the matrix a by the matrix b
 Example:
 Matrix.multiply(matrix1, matrix2)
 Output:
 Result after multiplication:
 27,9,-3
 -24,-30,18
 -6,42,-24

 7) determ (a): counts the determiner of the matrix a
 Example:
 let matrix1 = [
  [1, 2, 3],
  [3, -1, 4],
  [1, 2, 4]
 ]
 Matrix.determ(matrix1)
 Output:
 The determinator of this matrix is: -7

 8) reverse (a): finds reversed to matrix to matrix a
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

 9) Many more to come :) ...

 **********************/

// try the toolbox on the bottom

const ChukMatrix = {
    'isValid': true,
    'areValid': true,
    'isAdt': true,
    'rowsColls': 0,
    'result': '',
    'det': 0,
    'temp': 0,

    format(a) {
        let res = a.join('\n')
        return res
    },

    checkValid(a, out) {
        let rows, colls

        for (let i = 0; i < a.length - 1; i++) {
            if (a[i + 1].length > a[i].length) {
                this.isValid = false
            }
        }

        if (this.isValid === true) {
            if (out === true) {
                console.log('This matrix is valid!')
            }

            if (a.length === a[0].length) {
                this.isAdt = true
            }

            rows = a.length
            colls = a[0].length

            if (out === true) {
                console.log(`This matrix is ${rows}x${colls}`)
            }

            this.rowsColls = `${rows}x${colls}`

            if (rows === colls) {
                this.rowsColls = rows

                if (out === true) {
                    console.log('This matrix is square')
                }
            }
        } else {
            console.log('Your matrix is invalid!')
        }
    },

    checkValidDiff(a, b, out) {
        let c = 0

        if (a.length === b.length) {
            for (let i = 0; i < a.length; i++) {
                if (a[i].length === b[i].length) {
                    c++
                }
            }

            if (a.length === c) {
                this.areValid = true
                if (out === true) {
                    console.log('Matrices are match!')
                }
            } else {
                this.areValid = false
            }
        } else {
            this.areValid = false
        }

        if (this.areValid === false) {
            console.log('Matrices do not match!')
        }
    },

    transpose(a) {
        let res = a

        for (let i = 0; i < res.length; i++) {
            for (let j = i + 1; j < res[0].length; j++) {
                let tmp = res[j][i]
                res[j][i] = res[i][j]
                res[i][j] = tmp
            }
        }

        ChukMatrix.temp = res
        let resPlain = res.join('\n')
        console.log(`\nMatrix after transposing:\n${resPlain}`)
        return res
    },

    minus(a, b) {
        ChukMatrix.checkValidDiff(a, b)

        if (ChukMatrix.areValid === true) {
            let c = a

            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a.length; j++) {
                    c[i][j] = a[i][j] - b[i][j]
                }
            }

            ChukMatrix.temp = c
            let result = c.join('\n')
            console.log(`After minus action:\n${result}`)
            return c
        }
    },

    plus(a, b) {
        ChukMatrix.checkValidDiff(a, b)

        if (ChukMatrix.areValid === true) {
            let c = a

            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a.length; j++) {
                    c[i][j] = a[i][j] + b[i][j]
                }
            }

            ChukMatrix.temp = c
            let result = c.join('\n')
            console.log(`After plus action:\n${result}`)
            return c
        }
    },

    selfMultiply(a, n) {
        ChukMatrix.checkValid(a)

        if (ChukMatrix.isValid === true) {
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a.length; j++) {
                    a[i][j] *= n
                }
            }

            ChukMatrix.result = a.join('\n')
            ChukMatrix.temp = a
            console.log(`This matrix after multiplication: \n${ChukMatrix.result}`)
            return a
        }
    },

    multiply(a, b) {
        let res = []

        for (let i = 0; i < a.length; i++) {
            let temp = 0
            let tempArr = []

            for (let j = 0; j < b[0].length; j++) {
                for (let n = 0; n < b.length; n++) {
                    temp += a[i][n] * b[n][j]
                }

                tempArr.push(temp)
                temp = 0
            }

            res.push(tempArr)
            tempArr = []
        }

        ChukMatrix.temp = res
        let resPlain = res.join('\n')
        console.log(`Result after multiplication:\n${resPlain}\n`)
        return res
    },

    determ(a) {
        let result = 0

        this.checkValid(a, false)
        if (this.rowsColls === 2) {
            result = a[0][0] * a[1][1] - a[0][1] * a[1][0]
            console.log(`Your determiner is ${result}`)
        }

        if (this.rowsColls === 3) {
            result = a[0][0] * a[1][1] * a[2][2] + a[2][0] * a[0][1] * a[1][2] + a[1][0] * a[0][2] * a[2][1] - a[2][0] * a[1][1] * a[0][2] - a[0][0] * a[1][2] * a[2][1] - a[2][2] * a[1][0] * a[0][1]
            console.log(`\ndet = (${a[0][0]} * ${a[1][1]} * ${a[2][2]}) + (${a[2][0]} * ${a[0][1]} * ${a[1][2]}) + (${a[1][0]} * ${a[0][2]} * ${a[2][1]}) - (${a[2][0]} * ${a[1][1]} * ${a[0][2]}) - (${a[0][0]} * ${a[1][2]} * ${a[2][1]}) - (${a[2][2]} * ${a[1][0]} * ${a[0][1]}) = ${result}`)
            console.log(`determiner is: ${result}`)
            this.det = result
            return result
        } else {
            console.log('Your matrix is wrong!')
        }
    },

    reverse(a) {
        ChukMatrix.determ(a)
        let det = ChukMatrix.det
        let minor = a

        if (det === 0) {
            console.log('This matrix is degenerate!')
        } else {
            minor = [
                [Math.pow(-1, 1 + 1) * (a[1][1] * a[2][2] - a[1][2] * a[2][1]), Math.pow(-1, 1 + 2) * (a[1][0] * a[2][2] - a[1][2] * a[2][0]), Math.pow(-1, 1 + 3) * (a[1][0] * a[2][1] - a[1][1] * a[2][0])],
                [Math.pow(-1, 2 + 1) * (a[0][1] * a[2][2] - a[0][2] * a[2][1]), Math.pow(-1, 2 + 2) * (a[0][0] * a[2][2] - a[2][0] * a[0][2]), Math.pow(-1, 2 + 3) * (a[0][0] * a[2][1] - a[2][0] * a[0][1])],
                [Math.pow(-1, 3 + 1) * (a[0][1] * a[1][2] - a[0][2] * a[1][1]), Math.pow(-1, 3 + 2) * (a[0][0] * a[1][2] - a[0][2] * a[1][0]), Math.pow(-1, 3 + 3) * (a[0][0] * a[1][1] - a[0][1] * a[1][0])]
            ]

            let resPlain = minor.join('\n')
            console.log(`\nMatrix after minoring:\n${resPlain}`)
            ChukMatrix.transpose(minor)
            let minorTransp = ChukMatrix.temp
            let detStr = det

            if (det < 0) {
                detStr *= -1
            }

            for (let i = 0; i < minorTransp.length; i++) {
                for (let j = 0; j < minorTransp[0].length; j++) {
                    if (det < 0) {
                        if (minorTransp[i][j] === 0) {
                            continue
                        } else {
                            minorTransp[i][j] *= -1
                            minorTransp[i][j] += `/${detStr}`
                        }
                    } else {
                        if (minorTransp[i][j] === 0) {
                            continue
                        } else {
                            minorTransp[i][j] += `/${detStr}`
                        }
                    }
                }
            }

            ChukMatrix.temp = minorTransp
            resPlain = minorTransp.join('\n')
            console.log(`\nReversed matrix:\n${resPlain}`)
            return minorTransp
        }
    },

    kramer(a) {
        let arr = []
        let temp
        let last = []
        let det, x, y, z
        let detX, detY, detZ

        function fill() {
            for (let i = 0; i < a.length; i++) {
                temp.push([])
                for (let j = 0; j < a[0].length - 1; j++) {
                    temp[i].push(arr[i][j])
                }
            }
        }

        console.log('<Starting Kramer Method>')
        ChukMatrix.checkValid(a, false)

        if (ChukMatrix.rowsColls === '3x4') {
            console.log('Processing...')


            for (let i = 0; i < a.length; i++) {
                arr.push([])

                for (let j = 0; j < a[0].length - 1; j++) {
                    arr[i][j] = 0
                }
            }


            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a[0].length; j++) {
                    if (j === a[0].length - 1) {
                        last.push(a[i][j])
                    }
                }
            }

            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a[0].length - 1; j++) {
                    arr[i][j] = a[i][j]
                }
            }

            console.log(`\nMatrix without remnant: \n${ChukMatrix.format(arr)}`)
            console.log(`\nRemnant: ${last}`)

            det = ChukMatrix.determ(arr)

            for (let i = 0; i < a.length; i++) {
                temp = []
                fill()

                for (let j = 0; j < a.length; j++) {
                    temp[j][i] = last[j]
                }

                console.log(`\n${ChukMatrix.format(temp)}`)

                switch (i) {
                    case 0:
                        x = ChukMatrix.determ(temp)
                        break

                    case 1:
                        y = ChukMatrix.determ(temp)
                        break

                    case 2:
                        z = ChukMatrix.determ(temp)
                        break
                    default:
                        return null
                }
            }

            detX = x / det
            detY = y / det
            detZ = z / det

            console.log(`\ndet X = ${x} / ${det} = ${detX}\ndet Y = ${y} / ${det} = ${detY} \ndet Z = ${z} / ${det} = ${detZ}   \nDone!`)
            console.log('\nEnding...')
        } else {
            console.log('Your matrix is invalid')
            console.log('Shutting down...')
        }
    }
}
// you may change the names and matrix content however you want:

let matrix1 = [
    [3, 1, 3],
    [0, 1, 3],
    [-1, 1, 2]
]

let matrix2 = [
    [4, 5, -2],
    [-4, 3, -1],
    [8, 0, 1]
]

/*
  5x + y -3z = -2
  4x + 3y + 2z = 16
  2x - 3y + z = 17
*/

let mat4 = [
    [5, 1, -3, -2],
    [4, 3, 2, 16],
    [2, -3, 1, 17]
]

// try any method here:

ChukMatrix.kramer(mat4)
