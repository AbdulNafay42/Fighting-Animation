var character1 = 100
var backGroumd = 100
var character1Position = 10
var character2Position = backGroumd-character1-10



var character1 = document.getElementById("charactor-1");
var character2 = document.getElementById("character-2");

document.addEventListener("keydown", foo);
var charLeftAdd = 100;
var charRightAdd = 100;

function foo() {
  var key = event.code;
  if (key == "KeyA") {
    charLeftAdd += 8;
    character1.style.left = charLeftAdd + "px";

  } else if (key == "KeyB") {
    charLeftAdd -= 8;
    character1Position -= 10
    character1.style.left = charLeftAdd + "px";
    if(character1Position > backGroumd - character1){}
  } 
  
  else if (key == "KeyC") {
    charLeftAdd -= 8;
    character2.style.right = charLeftAdd + "px";
  } else if (key == "KeyD") {
    charLeftAdd += 8;
    character2.style.right = charLeftAdd + "px";
  }
}

document.addEventListener("keyup",function(event){

  var key = event.code;
 

 if(key === "e"){
  var change = player2.src = "images/character-1part2.gif"
  change.style.height = "300px"
  change.style.width = "200px"
 }
 else{
  player2.src = "images/character-1.gif"
 }
})

// document.addEventListener("keydown", foo);
// function foo(){
//   var key = event.code;
//   if (key === "e") {
//     character1.src = "images/character-1part2.gif";
//     change.style.height = "300px";
//     change.style.width = "200px";
// console.log("")
//   } else {
//     character1.src = "";
//   }
// console.log(foo()) 
//  }
// document.addEventListener("keyup" , function(){
//   var key = event.key
//   if (key == "e") {
//    character1.src = "images/character-1part2.gif"
//     // change.style.width = "200px"
//     // change.style.height = "300px"
//   }
//   else{
//     character1.src = "images/character-1.gif"
//   }
// })
// // document.addEventListener("keydown", abc);
// // var charRightAdd = 100;
// function abc() {
//   var key = event.code;
//   if (key == "KeyC") {
//     charLeftAdd += 8;
//     character2.style.left = charLeftAdd + "px";
//   }
//   else if(key == "KeyD"){
//     charLeftAdd -= 8;
//     character2.style.left = charLeftAdd + "px";

//   }

// }
