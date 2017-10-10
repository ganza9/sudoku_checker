// function Player(num){
//   this.num = num;
// }
//
// function Space(xCoord, yCoord){
//   this.xCoord = xCoord;
//   this.yCoord = yCoord;
//   this.num = "";
// }
//
// Space.prototype.getNum = function(){
//   if (this.num === ""){
//     this.num = newNum;
//     return newNum;
//   } else {
//     return ("This space is already filled")
//   }
// }
//
// function Board(){
//   this.spaces = [];
//   for(var i = 0, i < 9; i++){
//     for(var j = 0, j <9; j++){
//       this.spaces.push(new Space(i,j));
//     }
//   }
// }
//
// Board.prototype.boardFull = function(){
//   var isFull = true;
//   this.spaces.forEach(function(spaceFull){
//     if(spaceFull.getNum() === ""){
//       isFull= = false;
//     }
//   });
//   return isFull;
// }

function findLegalValuesForSpace(row, col) {
  var legalVals
}
