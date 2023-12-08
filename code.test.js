const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');


//i got this graph from the graph that was on the slide
var abs = [
    [[2,1],[3,4],[1,2]],
    [[2,1],[4,10],[5,2]],
    [[0,9],[4,8]],
    [[2,2]],
    [[3,7],[6,1]],
    [[7,3]],
    [[5,2],[4,4]],
    [[6,1]]
];//the first items that are a pair says what node to go to, the second says the cost
var bar = [
    [[1,1]],
    [[0,1]]
];
var foo = [
    [[1,1]],
    [[2,1]],
    [[3,1]],
    [[4,1]],
    [[5,1]],
    [[6,1]],
    [[6,0]]
];
//i know all these answers are correct i tested them myself
barAnswers = ["[0,0,1,1]",
"[1,0,0,1]"]
fooAnswers = ["[0,0,1,1,2,2,3,3,4,4,5,5,6,6]",
"[1,0,2,1,3,2,4,3,5,4,6,5,0,null]",
"[2,0,3,1,4,2,5,3,6,4,1,null,0,null]",
"[3,0,4,1,5,2,6,3,0,null,2,null,1,null]",
"[4,0,5,1,6,2,3,null,0,null,2,null,1,null]",
"[5,0,6,1,0,null,4,null,1,null,3,null,2,null]",
"[6,0,5,null,0,null,4,null,1,null,3,null,2,null]"]
absAnswer = ["[0,0,2,1,1,2,5,4,3,4,7,7,6,8,4,9]",
"[2,0,4,8,6,9,0,9,1,11,5,11,3,13,7,14]"]



jsc.assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(bar)), 0).flat()) == barAnswers[0]);
assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(bar)), 1).flat()) == barAnswers[1]);

assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(foo)), 0).flat()) == fooAnswers[0]);
assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(foo)), 1).flat()) == fooAnswers[1]);
assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(foo)), 2).flat()) == fooAnswers[2]);
assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(foo)), 3).flat()) == fooAnswers[3]);
assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(foo)), 4).flat()) == fooAnswers[4]);
assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(foo)), 5).flat()) == fooAnswers[5]);
assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(foo)), 6).flat()) == fooAnswers[6]);

assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(abs)), 0).flat()) == absAnswer[0]);
assert(JSON.stringify(dijkstra(JSON.parse(JSON.stringify(abs)), 2).flat()) == absAnswer[1]);
