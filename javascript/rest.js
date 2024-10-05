function rest(...args)
{
    let result=0;
    for(let arg of args)
    {
        result=result+arg;
    }
    console.log("Final result is: "+ result);
}
rest(10,20,30,40);