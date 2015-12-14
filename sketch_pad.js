function newParagraph() {
	var container = document.getElementById("container");
	var fadeDiv = document.getElementById("fadein");
	var testParagraph = document.createElement("p");
	container.insertBefore(testParagraph, fadeDiv);
};

$(document).ready(function() {
	$(document).on("click", "#newSketchpad", function(){
		newParagraph();
	});
});