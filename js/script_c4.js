var history = "";
var contactForm4 = document.getElementById("commentForm4");
contactForm4.addEventListener("submit", function(event) {
	event.preventDefault();
	var name = contactForm4.elements.namedItem("name").value;
	var message = contactForm4.elements.namedItem("message").value;
	var output = document.getElementById("comment4");
	var entries = "Name: " + name + " " + "Message: " + message;
	localStorage.setItem("entries", entries);
	output.innerHTML = localStorage.getItem("entries");
})