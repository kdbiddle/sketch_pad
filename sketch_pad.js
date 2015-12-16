/* 
Press button
Clear grid
construct new grid of size NxN
on mouseenter, addClass to each div
*/

var gridSize;
var tableElement;
var row;

function clearGrid() {
	//clear grid
	$("#sketchPadTable").empty();
};

function getGridSize() {
	gridSize = prompt("Please enter a number between 1 and 50.");
	parseInt(gridSize);
};

function newTable() {
	tableElement  = document.getElementById("sketchPadTable");
	for (var i=0; i<gridSize; i++) {
		row = tableElement.insertRow(i);
		for (var n=0; n<gridSize; n++) {
			row.insertCell(n).appendChild(document.createElement("div"));	
		};
	};
};

$(document).ready(function() {
	$(document).on("click", "#newSketchpad", function(){
		clearGrid();
		getGridSize();
		newTable();
	});
});