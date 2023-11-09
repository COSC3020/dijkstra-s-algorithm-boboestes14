const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');


//i got this graph from the graph that was on the slide
//so you have alredy shown what the answer should be 
var a = [
    [[2,1],[3,4],[1,2]],
    [[2,1],[4,10],[5,2]],
    [[0,9],[4,8]],
    [[2,2]],
    [[3,7],[6,1]],
    [[7,3]],
    [[5,2],[4,4]],
    [[6,1]]
];//the first items that are a pair says what node to go to, the second says the price
a = JSON.stringify(a)

console.log(dijkstra(JSON.parse(a), 2));
