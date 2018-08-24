!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.gamealgo=e():t.gamealgo=e()}(window,function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){t.exports={AStar:r(2)}},function(t,e,r){const o=r(3).Heap;t.exports=class{reset(t,e,r){this.graph=t,this.start=e,this.goal=r,this.closedSet=new Set,this.cameFrom=new Map,this.gScore=new Map,this.gScore.set(e,0),this.fScore=new Map,this.fScore.set(e,this.heuristicCostEstimate(e,r)),this.openSet=new o((t,e)=>this.fScore.get(t)<this.fScore.get(e)),this.openSet.push(e)}reconstructPath(t){const e=[];for(;t;)e.unshift(t),t=this.cameFrom.get(t);return e}heuristicCostEstimate(t,e){return 0}distBetween(t,e){const r=this.graph.adjList.get(t).get(e);return void 0!==r?r:1/0}step(){if(0===this.openSet.elements.length)return!1;const t=this.openSet.pop();return t===this.goal?this.reconstructPath(t):(this.closedSet.add(t),this.graph.getNeighbors(t).forEach(e=>{if(this.closedSet.has(e))return;let r=this.gScore.get(t)+this.distBetween(t,e);this.gScore.has(e)||this.gScore.set(e,1/0),r>=this.gScore.get(e)||(this.cameFrom.set(e,t),this.gScore.set(e,r),this.fScore.set(e,r+this.heuristicCostEstimate(e,this.goal)),this.openSet.push(e))}),!0)}run(t,e,r){this.reset(t,e,r);let o=!0;for(;!0===o;)o=this.step();return o}}},function(t,e,r){window,t.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){t.exports={ArrayList:r(2),Graph:r(3)}},function(t,e){t.exports=class extends Array{constructor(...t){super(...t)}get count(){return this.reduce((t,e)=>t+=e?1:0,0)}pullExists(){let t;for(let e=0;e<this.length;e+=1)if(this[e])return t=this[e],this[e]=void 0,t;return t}push(t){let e=0;for(;e<this.length;e+=1)if(!this[e])return this[e]=t;return this[e]=t}add(t){let e=0;for(;e<t.length;e+=1){let r=t[e];r&&this.push(r)}}remove(t,e){let r;r="string"==typeof t&&void 0!==e?r=>r[t]===e:"function"!=typeof t?e=>e===t:t;for(let t=0;t<this.length;t+=1)this[t]&&r(this[t])&&(this[t]=void 0)}clear(){for(let t=0;t<this.length;t+=1)this[t]=void 0}}},function(t,e){t.exports=class{constructor(){this.adjList=new Map}addVertex(t){this.adjList.has(t)||this.adjList.set(t,[])}addEdge(t,e){this.addVertex(t),this.addVertex(e),this.adjList.get(t).push(e),this.adjList.get(e).push(t)}bfs(t,e){var r=new Set;r.add(t);var o=[];o.push(t);const n=t=>{r.has(t)||(r.add(t),o.push(t))};for(;o.length;){var s=o.shift();"function"==typeof e&&e(s),this.adjList.get(s).forEach(n)}}dfs(t,e){var r=new Set;const o=t=>{r.add(t),"function"==typeof e&&e(t),this.adjList.get(t).filter(t=>!r.has(t)).forEach(o)};o(t)}print(){this.adjList.forEach((t,e)=>{const r=this.adjList.get(e).reduce((t,e)=>t+=`${e} `,`${e} -> `);console.log(r)})}}}])}])});