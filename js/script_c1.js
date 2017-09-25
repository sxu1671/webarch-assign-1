var history = "";
var commentForm1 = document.getElementById("commentForm1");
commentForm1.addEventListener("submit", function(event) {
	event.preventDefault();
	var name = commentForm1.elements.namedItem("name").value;
	var message = commentForm1.elements.namedItem("message").value;
	var output = document.getElementById("comment1");
	var entries = "Name: " + name + " " + "Message: " + message;
	localStorage.setItem("entries", entries);
	output.innerHTML = localStorage.getItem("entries");
})

	// localStorage.setItem("Name", name);
	// localStorage.setItem("Message", message);
	// history = history + "Name: " + localStorage.getItem("Name") + " " + "Message: " + localStorage.getItem("Message");
	// output.innerHTML = "Name: " + localStorage.getItem("Name") + " " + "Message: " + localStorage.getItem("Message");


	// if(name === "") {
	// 	output.innerHTML = "Please fill out name field";
	// } else if(message === "") {
	// 	output.innerHTML = "Please write a messag";
	// } else {
	// 	output.innerHTML = "Your message has been sent";
	// }	
