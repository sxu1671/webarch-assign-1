var history = "";
var commentForm2 = document.getElementById("commentForm2");
commentForm2.addEventListener("submit", function(event) {
	event.preventDefault();
	var name = commentForm2.elements.namedItem("name").value;
	var message = commentForm2.elements.namedItem("message").value;
	var output = document.getElementById("comment2");
	var entries = "Name: " + name + " " + "Message: " + message;
	localStorage.setItem("entries", entries);
	output.innerHTML = localStorage.getItem("entries");
})