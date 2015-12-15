var gridSize;

function newParagraph() {
	var container = document.getElementById("container");
	var fadeDiv = document.getElementById("fadein");
	var testParagraph = document.createElement("p");
	container.insertBefore(testParagraph, fadeDiv);
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
		getGridSize();
		createSketchPad();
	});
});