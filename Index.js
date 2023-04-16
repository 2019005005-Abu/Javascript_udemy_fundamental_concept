let i=0
while(i<5){
  console.log('I am Abu Al Shahriar Rifat');
  i++;
}

let dice=Math.trunc(Math.random() *6)+1;
console.log(dice);

// while(dice !==6){
//     let dice=Math.trunc(Math.random() *6)+1;
//     if(dice===6){
//         console.log("Loope is about to end "+'dice is'+dice)
//     }
// }


//coding challenges
const calcTip=function(bill){
 return bill>=50 && bill<=300  ?bill *0.15: bill*0.2
}
console.log(calcTip(100));
const bills=[22,295,176,440,37,105,10,1100,85,52];
const tips=[];
const totals=[];

for(let i=0;i<bills.length;i++){
  const tip=calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip+bills[i]);
}

console.log(bills,tips,totals);


const calcAveregae=function(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
  }
  return sum/arr.length;
}
console.log(calcAveregae(bills));

