var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGenerator() {
	const randomColor = Math.floor(Math.random()*0xFFFFFF<<0).toString(16);

	return "#" + randomColor;
}

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click",  () => {
	color1.value = randomGenerator();
	color2.value = randomGenerator();
	setGradient();
})