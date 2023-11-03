let selector = (element) => document.querySelector(element);
let allSelector = (elements) => document.querySelector(elements);
const passwordbox = selector("#password");
let copySign = selector(".copyImg")
let generateBtn = selector(".generateBtn")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "1234567890";
const symbol = "@#$%^&*()_+~{}[]-=<>?";
const allChars = upperCase + lowerCase + number + symbol;

let createPassword = () => {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];

	while (length > password.length) {
		password += allChars[Math.floor(Math.random() * allChars.length)];
	}
	passwordbox.value = password
};
function copyPassword() {
	passwordbox.select()
	document.execCommand("copy")
}
copySign.addEventListener("click",copyPassword)
generateBtn.addEventListener("click", createPassword)