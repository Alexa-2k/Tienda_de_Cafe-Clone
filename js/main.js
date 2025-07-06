function incluirHTML(id, archivo) {
  fetch(archivo)
    .then(response => {
      if (!response.ok) throw new Error("No se pudo cargar " + archivo);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  incluirHTML("nav", "components/nav.html");
  incluirHTML("footer", "components/footer.html");
 
});


document.addEventListener("scroll", function () {
	const nav = document.querySelector(".main-nav");
	if (window.scrollY > 50) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const toggle = document.querySelector(".menu-toggle");
	const menu = document.querySelector(".nav-menu");

	toggle.addEventListener("click", () => {
		menu.classList.toggle("show");
	});
});

const toggleButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

toggleButton.addEventListener("click", () => {
	navMenu.classList.toggle("show");
});