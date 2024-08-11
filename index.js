// function outest(){
//     var c=20;
// function outer(b)
// {
    
//     function inner()
//     {
//         console.log(a,b,c);
//     }
//     var a = 10;
//     return inner;
// }
// return outer;
// }
// // var close = outest()("hello");
// // close();
// outest()("hello")();

function Counter()
{
    var count = 0;
    this.incerementCounter = function ()
   {
    count++;
     console.log(count);
   }
   this.decrementCounter = function ()
   {
    count--;
    console.log(count);
   }
   
}
var counter1 = new Counter();
counter1.incerementCounter();
counter1.decrementCounter();
