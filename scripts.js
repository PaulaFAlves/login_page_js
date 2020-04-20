const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form")
const title = document.querySelector("h1")

btnLogin.addEventListener("click", event => {
	event.preventDefault();
	const fields = [...document.querySelectorAll(".input-block input")];
	fields.forEach(field => {
		if (field.value === "")
			form.classList.add("validate-error");
	})
	const formError = document.querySelector(".validate-error");
	if (formError) {
		formError.addEventListener("animationend", (event) => {
			if (event.animationName === "nono") {
				formError.classList.remove("validate-error")
			}
		});
	} else {
		form.classList.add("form-hide");
		title.classList.add("title-hide");
	}
});

form.addEventListener("animationstart", event => { //quando comecao
	if (event.animationName === "down") {
		document.querySelector("body").style.overflow = "hidden"; //para evitar a barra de rolagem
	}
})

form.addEventListener("animationend", event => { //quando termina
	if (event.animationName === "down") { //vai aplicar somente no animacao com nome down 
		form.style.display = "none"; 
		document.querySelector("body").style.overflow = "none"; //para permitir a volta da barra de rolagem
	}
})