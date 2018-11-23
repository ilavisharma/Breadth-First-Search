# Breadth-first search
Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.

## Pseudocode
A non-recursive implementation of breadth-first search:

Here in the code
* The Q queue contains the node along which the algorithm is currently searching.
* The S set is used to track which vertices have been visited but here in our case the nodes already have a boolean property **searched**.
* The parent attribute of each node is useful for accessing the nodes in a shortest path.

        Breadth-First-Search(Graph, root):
            
            create empty set S
            create empty queue Q      

            add root to S
            Q.enqueue(root)                      

            while Q is not empty:
                current = Q.dequeue()
                if current is the goal:
                    return current
                for each node n that is adjacent to current:
                    if n is not in S:
                        add n to S
                        n.parent = current
                        Q.enqueue(n)


<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif"><br>Animated example of a breadth-first search</p>