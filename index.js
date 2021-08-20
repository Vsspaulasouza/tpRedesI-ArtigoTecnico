const subtitulos = document.querySelectorAll(".subs");

function rolarPagina(event) {
  event.preventDefault();
  const href = event.target.getAttribute("href");
  const secao = document.querySelector(href);
  secao.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

subtitulos.forEach((sub) => addEventListener("click", rolarPagina));
