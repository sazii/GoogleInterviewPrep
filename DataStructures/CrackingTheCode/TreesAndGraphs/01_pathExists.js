//given a directed graph
// design an alg to find out whethere a route btw to nodes
//approach: implement bfs from starting node1; if you meet the node2 then there is a path; if not there is no path!
function pathExists(graph, node1, node2){
  let queue = [node1];
  let visiteds = {};
  visiteds[node1] = true;
  while (queue.length > 0){
    let node = queue.shift();
    if (node === node2) return true;
    let neighbors = graph[node];
    neighbors && neighbors.forEach(neigh => {
      if (!visiteds[neigh]) {
        queue.push(neigh);
        visiteds[neigh] = true;
    }
    });
  }
  return false;
}
