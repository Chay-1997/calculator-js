

var display=function(val)
{
document.getElementById("pressed").value+=val;
}

var solve=function(){
    let x=document.getElementById("pressed").value;
    let y=eval(x); //evaluate fun is used to evalutae an expression that we provide 2+3 or somethig else
    document.getElementById("pressed").value=y;
}

var clr=function()
{
    document.getElementById("pressed").value="";
}

















/*var showvalue=function(val){
    document.getElementById('pressed').value=parentInt(val);
}*/

//var showValue = function(val){
  //  document.getElementById('pressed').value = parseInt(val);
//}



/*document.getElementById("seven").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("seven").innerHTML;
});
document.getElementById("eight").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("eight").innerHTML;
});
document.getElementById("nine").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("nine").innerHTML;
});
document.getElementById("plus").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("plus").innerHTML;
});



document.getElementById("six").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("six").innerHTML;
});
document.getElementById("five").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("five").innerHTML;
});
document.getElementById("four").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("four").innerHTML;
});
document.getElementById("minus").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("minus").innerHTML;
});







document.getElementById("one").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("one").innerHTML;
});
document.getElementById("two").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("two").innerHTML;
});
document.getElementById("three").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("three").innerHTML;
});
document.getElementById("multiply").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("multiply").innerHTML;
});










document.getElementById("percentage").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("percentage").innerHTML;
});
document.getElementById("equal").addEventListener("click",function()
{
    document.getElementById("pressed").value=document.getElementById("equal").innerHTML;
});

*/











































