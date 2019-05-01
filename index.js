
// TAKE A NUMBER
//assign a number to the person, "welcome you are number x".
//keep track of the number we are passing out.


var i = 50
function takeANumber(katzDeliLine) {
  
	katzDeliLine.push(++i)
	return "Welcome, you are number " + i;
	
}

// NOW SERVING

function nowServing(katzDeliLine){
	if(katzDeliLine.length === 0){
	  return "There is nobody waiting to be served!"

} else {
		return "Currently serving " + "" + katzDeliLine.shift() + ".";

  }
}


// LINE FUNCTION

function currentLine(line){
	var s = []
	if (line.length === 0){
		return "The line is currently empty."
	} else {
	for(var i = 0; i<=line.length-1; i++){
	
		s.push(i+1 + ". " + line[i]);
	  } 
 return "The line is currently: " + s.join(", ")
  }
}

// function currentLine(line){
// 	var s = ""
// 	if (line.length === 0){
// 		return "The line is currently empty."
// 	} else {
// 	for(var i = 0; i<=line.length-1; i++){
// 		s+= i+1 + ". " + line[i] " ";
		
		
// 	} 
// }
// return "The line is currently: " + s
// }
//test

