A bunch of random utils for game development in js.

<a name="AStar"></a>

## AStar(start, goal)
Find the shortest path from one node to another in a graph.

**Kind**: global function  

| Param |
| --- |
| start | 
| goal | 


* [AStar(start, goal)](#AStar)
    * [~reconstructPath(cameFrom, current)](#AStar..reconstructPath)
    * [~heuristicCostEstimate(start, goal)](#AStar..heuristicCostEstimate)
    * [~distBetween(v1, v2)](#AStar..distBetween)

<a name="AStar..reconstructPath"></a>

### AStar~reconstructPath(cameFrom, current)
Rebuild path from.

**Kind**: inner method of [<code>AStar</code>](#AStar)  

| Param |
| --- |
| cameFrom | 
| current | 

<a name="AStar..heuristicCostEstimate"></a>

### AStar~heuristicCostEstimate(start, goal)
Calculate the heuristic cost.

**Kind**: inner method of [<code>AStar</code>](#AStar)  

| Param |
| --- |
| start | 
| goal | 

<a name="AStar..distBetween"></a>

### AStar~distBetween(v1, v2)
Calculate distance between two nodes

**Kind**: inner method of [<code>AStar</code>](#AStar)  

| Param | Type |
| --- | --- |
| v1 | <code>\*</code> | 
| v2 | <code>\*</code> | 

