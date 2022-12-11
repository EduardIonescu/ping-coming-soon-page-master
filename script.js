const emailInput = document.querySelector(".email-input");

// Checks for valid email
function checkEmail() {
	const emailRegex = /^\S+@\S+\.\S+$/;
	const inputValue = document.querySelector(".email-input").value;
	if (inputValue) {
		if (emailRegex.test(inputValue)) {
			setEmailError("");
		} else {
			setEmailError("Please provide a valid email address");
		}
	} else {
		setEmailError("Whoops! It looks like you forgot to add your email");
	}
}

function setEmailError(text) {
	document.querySelector(".email-error").innerHTML = text;
	if (text == "") {
		changeErrorBorder(false);
	} else {
		changeErrorBorder(true);
	}
}

function changeErrorBorder(triggerColorChange) {
	const emailInput = document.querySelector(".email-input");
	if (triggerColorChange) {
		emailInput.style.borderColor = "var(--secondary-light-red)";
	} else {
		emailInput.style.borderColor = "darkgreen";
		emailInput.value = "";
		alert("You'll get notified!");
	}
}
