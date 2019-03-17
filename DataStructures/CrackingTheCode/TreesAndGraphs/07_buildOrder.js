//given a list of projects and dependencies.
// dependencies: a list of pairs of projects where first one is prerequisite of second one.
// find a build order that will allow the projects to be built. if there is no build order; return an error.
// build a directed graph A -> B means A is prerequisite of B.
// if there is no incoming edge; you can fullfill the project. then fullfill it this means that you must delete outgoing edges from the node. Because you met the requirement. now you can find the new nodes that has no incoming edge.
var state = {
  VISITED: 'visited',
  VISITING: 'visiting',
  UNVISITED: 'unvisited'
};

function Project(name){
  this.name = name;
  this.children = [];//Array of projects
  this.dependencies = 0;
  this.map = new Map(); // key: name value: Project to store whole projects and to prevent from duplicate values.
  this.state = state.UNVISITED;
}

Project.prototype.addNeighbor = function(project){
  if (!this.map.has(project.name)){
    this.children.push(project);
    this.map.set(project.name, project);
    project.dependencies++;
  }
};

Project.prototype.incDependencies = function(){
  this.dependencies++;
};

Project.prototype.decDependencies = function(){
  this.dependencies--;
};

Project.prototype.getName = function(){
  return this.name;
};

Project.prototype.getChildren = function(){
  return this.children;
};

Project.prototype.getNumberOfDependencies = function(){
  return this.dependencies;
};

Project.prototype.getState = function(){
  return this.state;
};

Project.prototype.setState = function(state){
  this.state = state;
};

function Graph(){
  this.nodes = [];
  this.map = new Map();//key: name, value: project
}

Graph.prototype.getOrCreateNode = function(name){
  if (!this.map.has(name)){
    let project = new Project(name);
    this.map.set(name, project);
    this.nodes.push(project);
  }
  return this.map.get(name);
};

Graph.prototype.addEdge = function(preRequisiteName, projectName) {
  let prerequisite = this.getOrCreateNode(preRequisiteName);
  let project = this.getOrCreateNode(projectName);
  prerequisite.addNeighbor(project); // project is child of prerequisite
};

Graph.prototype.getNodes = function(){
  return this.nodes;
};

function buildGraph(projects, dependencies){
  let graph = new Graph();
  for (let i = 0; i < projects.length; i++){
    graph.getOrCreateNode(projects[i]);
  }
  for (let i = 0; i < dependencies.length; i++){
    graph.addEdge(dependencies[i][0], dependencies[i][1]);
  }
  return graph;
}

function orderProjects(projects){
  let buildOrder = [];
  // find the nodes there is no prerequisite and push them to arr.
  for (let i = 0; i < projects.length; i++){
    if (projects[i].getNumberOfDependencies() === 0) buildOrder.push(projects[i]);
  }
  let pt = 0;
  while (pt < buildOrder.length){
    let projectBuilded = buildOrder[pt];
    let children = projectBuilded.getChildren();
    children.forEach(child => {
      child.decDependencies();
      if (child.getNumberOfDependencies() === 0) buildOrder.push(child);
    });
    pt++;
  }
  if (buildOrder.length === projects.length) return buildOrder;
  else return 'there is no valid order';
}

function findBuildOrder(projects, dependencies){
  let graph = buildGraph(projects, dependencies);
  return orderProjects2(graph.getNodes());
}

//second approach with DFS.

function orderProjects2(projects){
  let buildOrder = [];
  for (let i = 0; i < projects.length; i++){
    if (projects[i].getState() === state.UNVISITED){
      if (!doDfs(projects[i], buildOrder)){
        return null;
      }
    }
  }
   return buildOrder;
}

function doDfs(project, orders){
  let myState = project.getState();
  if (myState === state.VISITING){
    return null;
  }
  if (myState === state.UNVISITED){
    project.setState(state.VISITING);
    let children = project.getChildren();
    children.forEach(child => {
      if (!doDfs(child, orders)) return false;
    });
    project.setState(state.VISITED);
    orders.unshift(project);
  }
  return true;
}

let projects = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let dependencies = [['f', 'a'], ['f', 'b'], ['f', 'c'], ['c', 'a'], ['b', 'a'], ['b', 'e'], ['a', 'e'], ['d', 'g'], ['b', 'h']];
console.log(findBuildOrder(projects, dependencies));

