console.log("This is the first line");
const myFucnction=()=>{
    let sum=0;
    for(let i=1;i<=10000;i++){
        sum=sum+i;
    }
    setTimeout(()=>{
      console.log(sum);
    },5000)
}
myFucnction();
console.log("This is the second line");