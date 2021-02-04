
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length==0) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) { }
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }

    }
        
    return matrix.flat(1);;
    }
