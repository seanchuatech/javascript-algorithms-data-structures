/* 
Graph
A graph is a non-linear data structure that consists of a finite number of vertices (also called as nodes) connected by edges
Trees are a specific type of graph data structure

Types of Graph
1. Directed
    -A graph in which the edges have a direction
    -Edges are usually represented by arrows pointing in the direction the graph can be traversed
    A > B > C
2. Undirected
    -A graph in which the edges are bidirectional
    -The graph cann be traversed in either direction
    -The absence of an arrow tells us that the graph is undirected 
    A - B - C
    C - B - A

Graph Usage-
Google Maps
Social Media Sites

Graph Representation
1. Ajacency Matrix
    -An ajacency matrix is a 2D array of size V x V where V is the number of vertices in the graph
    -Each row and column represent a vertex
    -If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j
2. Ajacency List
    -Vertices are stored in a map like data structure, and every vertex stores a list of its adjaacent vertices

Adjacency Matrix vs Adjacency List
-With an adjacency list, we only need to store the values for the edges that exist. 
-With adjacency matrix, ou store values irrespective of whether an edge exists or not. Storage wise, an adjacency list is way more efficient
-With adjacency list, inserting and finding adjacent nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.
-An adjacency list allows you to store additional values with an edge such as weight of the edge. With adjacency matrix, such information would have to be stored externally.
*/


