function TaskRunner(concurrency) {
  this.limit = concurrency;
  this.store = [];
  this.active = 0;
}

TaskRunner.prototype.push = function push(task) {
  if (this.active < this.limit) return TaskRunner();
};

function exampleSimpleTask(done) {
  setTimeout(done, Math.random() * 1000);
}

const r = new TaskRunner(3);

console.log(r.push(exampleSimpleTask(1)));
console.log(r.push(exampleSimpleTask(2)));
console.log(r.push(exampleSimpleTask(3)));
console.log(r.push(exampleSimpleTask(4)));
console.log(r.push(exampleSimpleTask(5)));
