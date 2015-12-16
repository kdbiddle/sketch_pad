/* 
Press button
Clear grid
construct new grid of size NxN
on mouseenter, addClass to each div
*/

var gridSize;
var tableElement;
var row;

// clears previous grid
function clearGrid() {
	$("#sketchPadTable").empty();
};

// prompts user for size of grid to be created up too 100x100
function getGridSize() {
	gridSize = prompt("Please enter a number between 1 and 100.");
	parseInt(gridSize);
	if (gridSize > 100) {
		gridSize = prompt("That is not a valid number. Please enter a number between 1 and 100.");
	};
};

// creates new square grid of size provided by user
function newTable() {
	tableElement  = document.getElementById("sketchPadTable");
	for (var i=0; i<gridSize; i++) {
		row = tableElement.insertRow(i);
		for (var n=0; n<gridSize; n++) {
			row.insertCell(n).appendChild(document.createElement("div"));	
		};
	};
};

// changes color of current div on mouse enter
function changeDivColor() {
	$("div").mouseenter(function() {
		$(this).addClass("black");
	});
};

// main function
$(document).ready(function() {
	$(document).on("click", "#newSketchpad", function(){
		clearGrid();
		getGridSize();
		newTable();
		changeDivColor();
	});
});