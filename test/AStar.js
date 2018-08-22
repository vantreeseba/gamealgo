var assert = require('chai').assert;
var AStar = require('../AStar');
var Graph = require('game-ds/Graph');

let graph;

const test = {
  AStar: {
    beforeEach: () => {
      graph = new Graph();
    },
    constructor: {
      'should construct a graph': () => {
        assert.isOk(graph);
      },
    },
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

      const path = AStar(graph, 'A', 'D');
      console.log(path);
    }
  }
};

module.exports = test;
