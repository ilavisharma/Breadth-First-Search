# Breadth-first search
Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.

## Pseudocode
A non-recursive implementation of breadth-first search:

Here in the code
* The Q queue contains the node along which the algorithm is currently searching.
* The S set is used to track which vertices have been visited but here in our case the nodes already have a boolean property **searched**.
* The parent attribute of each node is useful for accessing the nodes in a shortest path, so that we know from where we reached to this node.

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

## Implementation in JavaScript

The follwing code was implemented using the **p5.js** javascript library

```javascript
function bfs() {
        var start = graph.setStart(dropdown.value()); //select the starting point from the dropdown list
        var end = graph.setEnd('Kevin Bacon');   // can be any actor

        // ----------BREADTH FIRST SEARCH STARTS HERE----------
        var queue = [];
        start.searched = true;
        queue.push(start);

        while (queue.length > 0) {
            var current = queue.shift();
            if (current == end) {
                console.log("found " + current.value);
                break;
            }
            var edges = current.edges;
            for (var i = 0; i < edges.length; i++) {
                var neighbour = edges[i];
                if (!neighbour.searched) {
                    // if this node has not been searched
                    neighbour.searched = true;
                    neighbour.parent = current;
                    queue.push(neighbour); //push the node to the queue
                }
            }
        }

        // now to print the path of the search
        var path = [];
        path.push(end);
        var next = end.parent;
        while (next != null) {
            path.push(next);
            next = next.parent;
        }

        // this simple loop will then display the path on the webpage 
        var text = '';
        for (var i = (path.length - 1); i >= 0; i--) {
            var n = path[i];
            text += n.value;
            if (i != 0)
                text += ' ==> '
        }
        createP(text);
    }
```

## Shoutout
This whole project was made after I watched the video by <a href="https://github.com/shiffman">Daniel Shiffman</a>.<br> 
Do watch it<br>
1. Part 1- <a href="https://www.youtube.com/watch?v=piBq7VD0ZSo">Watch here</a>
2. Part 2- <a href="https://www.youtube.com/watch?v=-he67EEM6z0">Watch here</a>

**Channel Link-** <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw">The Coding Train</a>
