function Graph() {
    this.nodes = [];
    this.graph = {};
    this.start = null;
    this.end = null;
}

Graph.prototype.addNode = function (n) {
    // pushing node into array
    this.nodes.push(n);
    var title = n.value;
    // putting node into the graph object
    this.graph[title] = n;
}

Graph.prototype.getNode = function (actor) {
    var n = this.graph[actor];
    return n;
}

Graph.prototype.setStart = function (actor) {
    this.start = this.graph[actor];
    return this.start;
}

Graph.prototype.setEnd = function (actor) {
    this.end = this.graph[actor];
    return this.end;
}

Graph.prototype.reset = function () {
    for (var i = 0; i < this.nodes.length; i++) {
        this.nodes[i].searched = false;
        this.nodes[i].parent = null;
    }
}