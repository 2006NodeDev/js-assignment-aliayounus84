/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

   /* someStr = 'hello';
    startIndex = 0;
    endIndex = 3;*/
    return someStr.substring(0,3);

    try {
        if (substring.startIndex >5 )
            
            throw " string too big";
        
    }

    catch(Err)
    {
        alert("worng input for endindex");
    }

}
//substring();
console.log( substring('Hello')); //result throws error

