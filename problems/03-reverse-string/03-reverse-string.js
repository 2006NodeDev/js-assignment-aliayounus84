/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    var result = "";
    for(var i=someStr.length-1; i >=0; i--) {
       result += someStr[i];
    }
    return result;
    
    }
  
console.log(reverseStr("Hello"));
