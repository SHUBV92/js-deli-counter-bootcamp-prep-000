var katzDeli = [];
var line = [];



function currentLine(line) {
  if(line.length === 0) {
    console.log("The line is currently empty.");
  }
  var lines = [];
  
  else{
  for (var i = 0, i < line.length, i++) {
    lines.push(i+1 "." + line[1]);
  }
  console.log("The line is currently:" + lines)
}
}

/*
function takeANumber (line, name) {
  line.push(name);
  
console.log("Welcome," +name+ ". You are number" + line.length +"in line."); 
}

*/



var ticketNumber = 0;


function takeANumber2 () {
  
   ticketNumber++
   return "Welcome your" ticketNumber"  
   console.log (ticketNumber);
   
  
}
 





function nowServing(line) {
  if (line.length === 0) {
    console.log("There is nobody waiting to be served!")
  }
  else {
    return "Currently serving" + line.shift();
  }
}


takeANumber(katzDeli, "Billy")
takeANumber (katzDeli, "Hal")
takeANumber(katzDeli);
currentLine (katzDeli);
nowServing (katzDeli);
takeANumber(katzDeli, "Shubinder")
currentLine (katzDeli);
nowServing(katzDeli);
currentLine (katzDeli);

