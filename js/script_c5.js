var history = "";
var contactForm5 = document.getElementById("commentForm5");
contactForm5.addEventListener("submit", function(event) {
	event.preventDefault();
	var name = contactForm5.elements.namedItem("name").value;
	var message = contactForm5.elements.namedItem("message").value;
	var output = document.getElementById("comment5");
	var entries = "Name: " + name + " " + "Message: " + message;
	localStorage.setItem("entries", entries);
	output.innerHTML = localStorage.getItem("entries");
})