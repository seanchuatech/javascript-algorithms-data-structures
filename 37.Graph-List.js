/* 
2. Ajacency List
    -Vertices are stored in a map like data structure, and every vertex stores a list of its adjaacent vertices
*/

adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
}

console.log(adjacencyList['B']);