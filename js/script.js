var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var name = contactForm.elements.namedItem("name").value;
	var subject = contactForm.elements.namedItem("subject").value;
	var message = contactForm.elements.namedItem("message").value;
	var output = document.getElementById("contact");
	// console.log(name);
	if(name === "") {
		output.innerHTML = "Please fill out name field";
	} else if(subject === "") {
		output.innerHTML = "Please fill out subject field";
	} else if(message === "") {
		output.innerHTML = "Please write a message";
	} else {
		output.innerHTML = "Your message has been sent";
	}	
})

