//global scope

var a=10; //global scope

{
    //block scope
    console.log(a)
}
{
    let b=20;
}
console.log(b);

