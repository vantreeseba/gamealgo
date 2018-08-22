const Heap = require('game-ds').Heap;

/**
 * Find the shortest path from one node to another in a graph.
 *
 * @param {} start
 * @param {} goal
 */
function AStar(graph, start, goal) {
  /**
   * Rebuild path from.
   *
   * @param {} cameFrom
   * @param {} current
   */
  function reconstructPath(cameFrom, current) {
    const path = [];

    while(current) {
      path.unshift(current);
      current = cameFrom.get(current);
    }

    return path;
  }

  /**
   * Calculate the heuristic cost.
   *
   * @param {} start
   * @param {} goal
   */
  function heuristicCostEstimate(start, goal) {
    return 0;
  }

  /**
   * Calculate distance between two nodes
   *
   * @param {*} v1
   * @param {*} v2
   */
  function distBetween(v1, v2) {
    const dist = graph.adjList.get(v1).get(v2);
    return dist !== undefined ? dist : Infinity;
  }

  // The set of nodes already evaluated
  const closedSet = new Set();

  // For each node, which node it can most efficiently be reached from.
  // If a node can be reached from many nodes, cameFrom will eventually contain the
  // most efficient previous step.
  // cameFrom := an empty map
  const cameFrom = new Map();

  // For each node, the cost of getting from the start node to that node.
  // map with default value of Infinity
  const gScore = new Map();

  // The cost of going from start to start is zero.
  gScore.set(start, 0);

  // For each node, the total cost of getting from the start node to the goal
  // by passing by that node. That value is partly known, partly heuristic.
  // fScore := map with default value of Infinity
  const fScore = new Map();

  // // For the first node, that value is completely heuristic.
  fScore.set(start, heuristicCostEstimate(start, goal));

  // The set of currently discovered nodes that are not evaluated yet.
  // Initially, only the start node is known.
  const openSet = new Heap((a, b) => fScore.get(a) < fScore.get(b));
  openSet.push(start);


  // while openSet is not empty
  while(openSet.elements.length > 0) {
    // the node in openSet having the lowest fScore[] value
    const current = openSet.pop();
    if(current === goal){
      return reconstructPath(cameFrom, current);
    }

    closedSet.add(current);

    graph.getNeighbors(current).forEach(neighbor => {
      if(closedSet.has(neighbor)) {
        return;
      }


      let tempGScore = gScore.get(current) + distBetween(current, neighbor);
      if(!gScore.has(neighbor)) {
        gScore.set(neighbor, Infinity);
      }
      if(tempGScore >= gScore.get(neighbor)) {
        return;
      }

      cameFrom.set(neighbor, current);
      gScore.set(neighbor, tempGScore);
      fScore.set(neighbor, tempGScore + heuristicCostEstimate(neighbor, goal));
      openSet.push(neighbor);
    });
  }
}

module.exports = AStar;
