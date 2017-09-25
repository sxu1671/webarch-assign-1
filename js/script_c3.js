var history = "";
var contactForm3 = document.getElementById("commentForm3");
contactForm3.addEventListener("submit", function(event) {
	event.preventDefault();
	var name = contactForm3.elements.namedItem("name").value;
	var message = contactForm3.elements.namedItem("message").value;
	var output = document.getElementById("comment3");
	var entries = "Name: " + name + " " + "Message: " + message;
	localStorage.setItem("entries", entries);
	output.innerHTML = localStorage.getItem("entries");
})