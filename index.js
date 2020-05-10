 // 1st question
 function p() { 
 
     let array = [8,7,4,10,15,13,9,21];
     document.write("The array elements are: "+array);  

    var n, i, flag = true; 
      n = array[0];
      n = parseInt(n) 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
    if (flag == true) 
        alert(n + " is prime"); 
    else
         alert(n + " is not prime"); 
 } 

// 2nd question
function Frequent(){
var arr1 = [3, 5, 17, 5, 2, 5, 2, 3, 5, 2, 4, 9, 3];
document.write("The array elements are:" +arr1);

var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
alert(item+" ( " +mf +" times ) ") ;
}

// 3rd question
function swap(){
var str = 'fsd SUMMER batch';
document.write("The string is: " +str);
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
alert(result.join(''));
}

// 4th question
function sum_sq() {
    let array = [0,1,2,3,4,5,6];
    console.log("The array elements are: " +array);
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
   }
    console.log(sum_sq([0,1,2,3,4,5,6]));

// 5th question
function oddoreven(){
for (var x=0; x<=15; x++) {
    if (x === 0) {
            alert(x +  " is even");
    }
    else if (x % 2 === 0) {
            alert(x + " is even");   
    }
    else {
            alert(x + " is odd");
    }
}
}


// 6th question
text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
}
  console.log(text_truncate('FSD SUMMER BATCH 2020.'))
  console.log(text_truncate('FSD SUMMER BATCH.',19))
  console.log(text_truncate('FSD SUMMER BATCH.',15,'!!'))

// 7th question
function findLarge(a,b) {
  var a =  Number(prompt('Enter first number'));
  var b =  Number(prompt('Enter second number'));
	if(a > b)
		alert("THe largest number is:" +a);
	else if(a === b)
    alert(0);
	else
    alert("THe largest number is:" +b);
}

// 8th question
function arrange(){
  let vals =["loop","statement","condition","operation"];
  document.write("The objects in the array are:" +vals);
  vals.sort();
  alert(vals);
}



// 9th question
function pyramid(){
  var i,j,result,str;
  str = "javascript";
  for(i=1;i<=str.length;i++){
    result = str.substr(0,i);
    document.write(result +"</br>");
  }
}

//   10th question
function Pattern(){
var rows=4;
for(var i=1;i<=rows;i++)
{
for(var j=1;j<=i;j++)
{
document.write(" * ");
}
document.write("<br/>");
}}









  
  
   






