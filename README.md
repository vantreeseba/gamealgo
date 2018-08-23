A bunch of random utils for game development in js.

<a name="AStar"></a>

## AStar
A* Search algorithm implementation.

**Kind**: global class  

* [AStar](#AStar)
    * [.reset(graph, start, goal)](#AStar+reset)
    * [.reconstructPath(current)](#AStar+reconstructPath)
    * [.heuristicCostEstimate(start, goal)](#AStar+heuristicCostEstimate)
    * [.distBetween(v1, v2)](#AStar+distBetween)
    * [.step()](#AStar+step) ⇒ <code>Boolean</code> \| <code>Array</code>
    * [.run(graph, start, goal)](#AStar+run)

<a name="AStar+reset"></a>

### aStar.reset(graph, start, goal)
Reset astar runner so you can use a diff graph, start or goal.

**Kind**: instance method of [<code>AStar</code>](#AStar)  

| Param |
| --- |
| graph | 
| start | 
| goal | 

<a name="AStar+reconstructPath"></a>

### aStar.reconstructPath(current)
Rebuild path from.

**Kind**: instance method of [<code>AStar</code>](#AStar)  

| Param |
| --- |
| current | 

<a name="AStar+heuristicCostEstimate"></a>

### aStar.heuristicCostEstimate(start, goal)
Calculate the heuristic cost.

**Kind**: instance method of [<code>AStar</code>](#AStar)  

| Param |
| --- |
| start | 
| goal | 

<a name="AStar+distBetween"></a>

### aStar.distBetween(v1, v2)
Calculate distance between two nodes

**Kind**: instance method of [<code>AStar</code>](#AStar)  

| Param | Type |
| --- | --- |
| v1 | <code>\*</code> | 
| v2 | <code>\*</code> | 

<a name="AStar+step"></a>

### aStar.step() ⇒ <code>Boolean</code> \| <code>Array</code>
Take a single step through the algorithm, this is mostly exposed for doing demos/visualization.

**Kind**: instance method of [<code>AStar</code>](#AStar)  
**Returns**: <code>Boolean</code> \| <code>Array</code> - A bool indicating it's still running, or an array of the shortest path.  
<a name="AStar+run"></a>

### aStar.run(graph, start, goal)
Find the shortest path from one node to another in a graph.

**Kind**: instance method of [<code>AStar</code>](#AStar)  

| Param |
| --- |
| graph | 
| start | 
| goal | 

