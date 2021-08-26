let payment = 150;
let change = 80.99;
let money = [100, 50, 10, 5, 1, .50, .25,.10,.05,.01];
let changeUsed = [];

for (let i = 0; i < money.length; i++) {
  if(change == money[i]) {
    change = change -money[i]
    changeUsed.push(money[i])
  }
  else if(change > money[i]) {
    change = change -money[i]
    changeUsed.push(money[i])
    i = 0
  }
}
console.log(changeUsed);

// let newArray = [];
// console.log('Change' + '' + change)
// for(let i = 0; i<money.length;i++){
//   if(change-money[i]>=0 && change-money[i] < final){
//     final = change - money[i]
//     newArray.push(final)
//   }
// }
// for(let j = 0; j<newArray.length;j++){
//   var smallestTotal = newArray[0]
//   if(newArray[j]<smallestTotal){
//     smallestTotal = newArray[j]
//   }
// }
// console.log(smallestTotal)
// console.log(newArray)
// final = smallestTotal
