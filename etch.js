<div id="sketchpad">
  <div id="grid"></div>
</div>

#sketchpad {
  width: 500px;
  height: 500px;
  border: 1px solid black;
  position: relative;
}

.grid-square {
  width: 10px;
  height: 10px;
  background-color: white;
  display: inline-block;
}



// function to create the grid
function createGrid() {
  for (var i = 0; i < 2500; i++) {
    var gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    document.getElementById("grid").appendChild(gridSquare);
  }
}

// function to change the color of the grid square when hovered over
function changeColor() {
  var gridSquares = document.getElementsByClassName("grid-square");
  for (var i = 0; i < gridSquares.length; i++) {
    gridSquares[i].addEventListener("mouseover", function() {
      this.style.backgroundColor = "black";
    });
  }
}

createGrid();
changeColor();
