/* 
Press button
Clear grid
construct new grid of size NxN
on mouseenter, addClass to each div
*/

var gridSize, tableElement, row, rValue, gValue, bValue, randomColor;

// clears previous grid
function clearGrid() {
	$("#sketchPadTable").empty();
};

// prompts user for size of grid to be created up too 100x100
function getGridSize() {
	gridSize = prompt("Please enter a number between 1 and 75.");
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

// changes opacity of current div on mouse enter
function changeDivOpacity() {
	$("div").addClass("black");
	$("div").mouseenter(function() {
		$(this).animate({
			opacity: "-=0.25"}, 0);
	});
};

function randomRGBValue() {
		rValue = Math.floor(Math.random()*255);
		gValue = Math.floor(Math.random()*255);
		bValue = Math.floor(Math.random()*255);
		randomColor = "rgb("+rValue+","+gValue+","+bValue+")";

};

function changeDivColorRandom() {
	$("div").mouseenter(function(){
		randomRGBValue();
		$(this).css("background-color", randomColor);
	});
};


$(document).ready(function() {
// Option 1: Sketch pad that changes div color on mouse enter
	$(document).on("click", "#sketchPadOne", function(){
		clearGrid();
		getGridSize();
		newTable();
		changeDivColor();
	});

// Option 2: Sketch pad that decreases div opacity by 0.25 on mouse enter
	$(document).on("click", "#sketchPadTwo", function(){
		clearGrid();
		getGridSize();
		newTable();
		changeDivOpacity();
	});

//Option 3: Sketch pad that changes div to random color on mouse enter
	$(document).on("click", "#sketchPadThree", function(){
		clearGrid();
		getGridSize();
		newTable();
		changeDivColorRandom();
	});
});