var data;
var graph;
var dropdown;

function preload() {
    // load the json befor the setup
    data = loadJSON('kevinbacon.json');
}

function setup() {
    noCanvas();
    // console.log(data);

    graph = new Graph();
    dropdown = createSelect();
    dropdown.changed(bfs);

    var movies = data.movies;
    // creating the individual nodes for the movie title 
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i].title;
        var cast = movies[i].cast;

        var movieNode = new Node(movie);
        // adding the nodes to the graph
        graph.addNode(movieNode);

        // creating the nodes of the cast
        for (var j = 0; j < cast.length; j++) {
            var actor = cast[j];
            var actorNode = graph.getNode(actor);
            if (actorNode == undefined) {
                actorNode = new Node(actor);
                //TODO: "this line may need to go one step down i.e. out of the loop"
                graph.addNode(actorNode);
                dropdown.option(actor);
            }
            // console.log(actor);
            movieNode.addEdge(actorNode);
        }
    }


    function bfs() {
        graph.reset();
        var start = graph.setStart(dropdown.value());
        var end = graph.setEnd('Kevin Bacon');

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
                    queue.push(neighbour);
                }
            }
        }

        var path = [];
        path.push(end);
        var next = end.parent;
        while (next != null) {
            path.push(next);
            next = next.parent;
        }
        var text = '';
        for (var i = (path.length - 1); i >= 0; i--) {
            var n = path[i];
            text += n.value;
            if (i != 0)
                text += ' ==> '
        }
        createP(text);
    }

}