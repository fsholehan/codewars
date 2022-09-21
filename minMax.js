const min = function(list){
    
  return list.reduce((a,b) => Math.min(a,b));
}

const max = function(list){
  
  return list.reduce((a,b) => Math.max(a,b));
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110)