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

// prompts user for size of grid to be created
function getGridSize() {
	gridSize = prompt("Please enter a number between 1 and 50.");
	parseInt(gridSize);
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

function changeDivColor() {
	$("div").mouseenter(function() {
		$("this").addClass("black");
		console.log("entered div");
	});
};

$(document).ready(function() {
	$(document).on("click", "#newSketchpad", function(){
		clearGrid();
		getGridSize();
		newTable();
		changeDivColor();
	});
});