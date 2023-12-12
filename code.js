function dijkstra(graph, sourceNode) {
    a = []
    b = []
    for(i = 0; i < graph.length; i++){
        a[i] = [i, Infinity]
        b[i] = 0
    }
    a[sourceNode][1] = 0
    for(i = 0; i < a.length;){
        a = sortIt(a)
        for(k = 0; k < graph[a[a.length-1][0]].length; k++){
            val = findIt(a, graph[a[a.length-1][0]][k][0])
            if(val != -1 && graph[a[a.length-1][0]][k][1]+a[a.length-1][1] < a[val][1]){
                a[val][1] = graph[a[a.length-1][0]][k][1]+a[a.length-1][1]
            }
        }
        b[a.length-1] = a[a.length-1]
        a.pop()
    }
    b.reverse()
    return b;
}


function sortIt(arr) {
    arr.sort((a, b) => b[1] - a[1])
    return arr;
}

function findIt(arr, n) {
    //i just got this from an earlier assignment
    for(var i = 0; i < arr.length-1; i++) {
        if(arr[i][0] == n){
            return i;
        }
      }
      return -1;
}