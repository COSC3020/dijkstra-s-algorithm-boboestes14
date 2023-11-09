[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12743052&assignment_repo_type=AssignmentRepo)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function. I have not provided any test code, but you can base
yours on test code from other exercises.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one!

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## My Runtime Analysis
The big $\Theta$ complexity of my implementation is $v^3+ev^2$. This is because 
when we start we have to go through every node to initialize all the nodes to 
infinity, then we have to set the initial node to 0. This takes v time to do.
Next, we have to go through a foe loop which will run v times as well, since we
have to go through all the nodes at least once taking v time. After that, I 
reverse sort the list so that the next node to be checked is at the top of a queue
which takes $v^2$ time. Next, we have to go through all the edges in the graph,
because if we didn't then we couldn't guarantee that we have found the shortest path.
This takes e time. During that time we have to see if any new distances are shorter 
than old ones. This takes v time since we have to go through the whole
queue to find what the old distance was and see if it is shorter than the new distance.
This is all the times that go into the algorithm which gets us $v+v^3+ev^2$, which 
after getting rid of the smaller order terms leaves us with the time $v^3+ev^2$.
