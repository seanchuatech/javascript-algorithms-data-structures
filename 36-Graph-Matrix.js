/* 
1. Ajacency Matrix
    -An ajacency matrix is a 2D array of size V x V where V is the number of vertices in the graph
    -Each row and column represent a vertex
    -If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j
*/
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

console.log(matrix[1][0]);