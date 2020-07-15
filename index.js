document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  const button = document.getElementById("move-button")
  const movesList = document.getElementById("moves-container")
  let moves = []

  function executeMove() {
    let direction = moves.shift()
    move(direction.replace("Arrow", "").toLowerCase())
    movesList.firstChild.remove()
  }




  document.addEventListener("keydown", function(e) {
    
    if(e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
      moves.push(e.key)
      console.log(moves)
    let newLi = document.createElement("li")
    newLi.innerText = (e.key.replace("Arrow", ""))
    movesList.append(newLi)
    }
  })


  button.addEventListener("click", function(e) {
    executeMove()
  })




//1. Storing commands given and on indications we execute it from there xxx
//2. Store commands we need to xxx
//a.set up event listener for arrow keys xxx
//b.if an arrow key is pressed store it in an array xxx
//c.function makes first movement then moves it from array .shift
//d.use .pop to delete the move from array linked to another event listener



})
