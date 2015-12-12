function newParagraph() {
	var testParagraph = document.createElement("p");
	document.body.insertBefore(testParagraph, document.getElementById("#newSketchpad"));
};

$(document).ready(function() {
	$(document).on("click", "#newSketchpad", function(){
		newParagraph();
	});
});