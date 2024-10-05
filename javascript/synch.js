console.log("This is the first line");
const myFunction=()=>{
    let sum=0;
    for(let i=1;i<=10000;i++){
        sum=sum+i;
    }
    console.log(sum);
}
myFunction();
console.log("This is the second line");