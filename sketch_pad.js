/* 
Press button
Clear grid
construct new grid of size NxN
on mouseenter, addClass to each div
*/

var gridSize;
var tableElement;

function newTable() {
	tableElement  = document.getElementById("sketchPadTable");
	var firstRow = tableElement.insertRow(0);
	firstRow.insertCell(0).appendChild(document.createElement("div"));
	firstRow.insertCell(1).appendChild(document.createElement("div"));
	firstRow.insertCell(2).appendChild(document.createElement("div"));
	firstRow.insertCell(3).appendChild(document.createElement("div"));

};

function getGridSize() {
	gridSize = prompt("Please enter a number between 1 and 10.");
	parseInt(gridSize);
	console.log(gridSize);
};

function createSketchPad() {
	for (var i=0; i<gridSize; i++) {
		newParagraph();
	};
};

$(document).ready(function() {
	$(document).on("click", "#newSketchpad", function(){
		newTable();
	});
});