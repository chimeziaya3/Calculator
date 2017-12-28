console.log('its connected');

// my place holder variables
const output = 0;
const numbers = 0;
 
// My Operator funtions below
function sum(){
     document.getElementById('display').value+='+';
}
function subdtract(){
    document.getElementById('display').value+='-';
}
function mul(){
	document.getElementById('display').value+='*';
}
function div(){
	document.getElementById('display').value+='/';
}
function result(){
	document.getElementById('display').value=eval(document.getElementById('display').value);
}
// My average function. Can't seem to get it to work
function average(value){
    var sum=0;
	let numbers=value.split("+");
	for (let i = 0; i < numbers.length; i++) {
        sum=sum+numbers[i];
        
    }
	output=sum/numbers.length;
    
	document.getElementById('display').value=output;
}