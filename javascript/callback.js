function greet(name,callback){
    console.log(name);
    callback();
}
function welcome(){
    console.log("This is a callback function");
}
greet("gnit",welcome);