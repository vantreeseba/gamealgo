const Heap = require('game-ds').Heap;

/**
 * A* Search algorithm implementation.
 */
class AStar {
  /**
   * Reset astar runner so you can use a diff graph, start or goal.
   *
   * @param {} graph
   * @param {} start
   * @param {} goal
   */
  reset(graph, start, goal) {
    this.graph = graph;
    this.start = start;
    this.goal = goal;

    // The set of nodes already evaluated
    this.closedSet = new Set();

    // For each node, which node it can most efficiently be reached from.
    // If a node can be reached from many nodes, cameFrom will eventually contain the
    // most efficient previous step.
    // cameFrom := an empty map
    this.cameFrom = new Map();

    // For each node, the cost of getting from the start node to that node.
    // map with default value of Infinity
    this.gScore = new Map();

    // The cost of going from start to start is zero.
    this.gScore.set(start, 0);

    // For each node, the total cost of getting from the start node to the goal
    // by passing by that node. That value is partly known, partly heuristic.
    // fScore := map with default value of Infinity
    this.fScore = new Map();

    // // For the first node, that value is completely heuristic.
    this.fScore.set(start, this.heuristicCostEstimate(start, goal));

    // The set of currently discovered nodes that are not evaluated yet.
    // Initially, only the start node is known.
    this.openSet = new Heap((a, b) => this.fScore.get(a) < this.fScore.get(b));
    this.openSet.push(start);
  }
  /**
   * Rebuild path from.
   *
   * @param {} current
   */
  reconstructPath(current) {
    const path = [];

    while(current) {
      path.unshift(current);
      current = this.cameFrom.get(current);
    }

    return path;
  }
  /**
   * Calculate the heuristic cost.
   *
   * @param {} start
   * @param {} goal
   */
  heuristicCostEstimate(node, goal) {
    return 0;
  }
  /**
   * Calculate distance between two nodes
   *
   * @param {*} v1
   * @param {*} v2
   */
  distBetween(v1, v2) {
    const dist = this.graph.adjList.get(v1).get(v2);
    return dist !== undefined ? dist : Infinity;
  }

  /**
   * Take a single step through the algorithm, this is mostly exposed for doing demos/visualization.
   *
   * @return {Boolean|Array} A bool indicating it's still running, or an array of the shortest path.
   */
  step(){
    if(this.openSet.elements.length === 0) {
      return false;
    }
    // the node in openSet having the lowest fScore[] value
    const current = this.openSet.pop();
    if(current === this.goal){
      return this.reconstructPath(current);
    }

    this.closedSet.add(current);

    this.graph.getNeighbors(current).forEach(neighbor => {
      if(this.closedSet.has(neighbor)) {
        return;
      }

      let tempGScore = this.gScore.get(current) + this.distBetween(current, neighbor);
      if(!this.gScore.has(neighbor)) {
        this.gScore.set(neighbor, Infinity);
      }
      if(tempGScore >= this.gScore.get(neighbor)) {
        return;
      }

      this.cameFrom.set(neighbor, current);
      this.gScore.set(neighbor, tempGScore);
      this.fScore.set(neighbor, tempGScore + this.heuristicCostEstimate(neighbor, this.goal));
      this.openSet.push(neighbor);
    });

    // Return true to say it's still running.
    return true;
  }

  /**
   * Find the shortest path from one node to another in a graph.
   *
   * @param {} graph
   * @param {} start
   * @param {} goal
   */
  run(graph, start, goal) {
    this.reset(graph, start, goal);
    let running = true;
    while(running === true){
      running = this.step();
    }

    return running;
  }
}

module.exports = AStar;
