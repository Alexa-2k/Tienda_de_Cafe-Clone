/*============ JS ============*/

function incluirHTML(id, archivo) {
	return fetch(archivo) // Importante: retorna la promesa
		.then((response) => {
			if (!response.ok) throw new Error("No se pudo cargar " + archivo);
			return response.text();
		})
		.then((data) => {
			document.getElementById(id).innerHTML = data;
		})
		.catch((error) => {
			console.error(error);
		});
}

document.addEventListener("DOMContentLoaded", () => {
	// 1. Incluir el HTML de la navegación.
	// Una vez que se carga el nav, entonces se adjuntan los event listeners.
	incluirHTML("nav", "components/nav.html").then(() => {
		// Este código se ejecutará SOLO DESPUÉS de que el nav.html se haya insertado.
		const toggleButton = document.querySelector(".menu-toggle");
		const navMenu = document.querySelector(".nav-menu");

		if (toggleButton && navMenu) {
			toggleButton.addEventListener("click", () => {
				navMenu.classList.toggle("show");
				// Opcional: Para accesibilidad
				const isExpanded =
					toggleButton.getAttribute("aria-expanded") === "true";
				toggleButton.setAttribute("aria-expanded", !isExpanded);
			});
		}
	});

	// 2. Incluir el HTML del footer (puede ser independiente)
	incluirHTML("footer", "components/footer.html");
});

// Efecto "scrolled" para la barra de navegación
document.addEventListener("scroll", function () {
	const nav = document.querySelector(".main-nav");
	if (nav) {
		if (window.scrollY > 50) {
			nav.classList.add("scrolled");
		} else {
			nav.classList.remove("scrolled");
		}
	}
});

// Nota: Eliminé los bloques duplicados del event listener del menú hamburguesa.

// function incluirHTML(id, archivo) {
//   fetch(archivo)
//     .then(response => {
//       if (!response.ok) throw new Error("No se pudo cargar " + archivo);
//       return response.text();
//     })
//     .then(data => {
//       document.getElementById(id).innerHTML = data;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   incluirHTML("nav", "components/nav.html");
//   incluirHTML("footer", "components/footer.html");

// });

// document.addEventListener("scroll", function () {
// 	const nav = document.querySelector(".main-nav");
// 	if (window.scrollY > 50) {
// 		nav.classList.add("scrolled");
// 	} else {
// 		nav.classList.remove("scrolled");
// 	}
// });

// document.addEventListener("DOMContentLoaded", () => {
// 	const toggle = document.querySelector(".menu-toggle");
// 	const menu = document.querySelector(".nav-menu");

// 	toggle.addEventListener("click", () => {
// 		menu.classList.toggle("show");
// 	});
// });

// const toggleButton = document.querySelector(".menu-toggle");
// const navMenu = document.querySelector(".nav-menu");

// toggleButton.addEventListener("click", () => {
// 	navMenu.classList.toggle("show");
// });
