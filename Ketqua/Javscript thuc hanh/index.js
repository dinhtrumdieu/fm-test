var arr = [2, 5, 2, 8, 5, 6, 8, 8];

var map = arr.reduce(function (p, c) {
  p[c] = (p[c] || 0) + 1;
  return p;
}, {});
var newTypesArray = Object.keys(map).sort(function(a,b){
  return map[a]-map[b];
});
console.log(newTypesArray);
// ----------------//
// Bài 2
// ----------------//
const a = ["acs", "ga", "wd", "a", "d"];
const b = a.sort();
// console.log(a);
console.log(b);
document.write(b);
