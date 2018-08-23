var assert = require('chai').assert;
var AStar = require('../AStar');
var Graph = require('game-ds/Graph');

let graph;
let astar;

const test = {
  AStar: {
    beforeEach: () => {
      graph = new Graph();
      astar = new AStar();
    },
    constructor: {
      'should construct a graph': () => {
        assert.isOk(graph);
      },
    },
    run: {
      'should find the shortest path': () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');

        graph.addEdge('A', 'B', 1);
        graph.addEdge('A', 'C', 0);
        graph.addEdge('B', 'D', 1);
        graph.addEdge('C', 'D', 1);

        // Path should be A C D.
        const expected = ['A', 'C', 'D'];

        const path = astar.run(graph, 'A', 'D');
        assert.deepEqual(expected, path);
      },
      'should return false when no path is found': () => {
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');

        graph.addEdge('A', 'B', 1);
        graph.addEdge('C', 'D', 1);

        // Path should be A C D.
        const expected = false;

        const path = astar.run(graph, 'A', 'D');
        assert.deepEqual(expected, path);

      }
    }
  }
};

module.exports = test;
