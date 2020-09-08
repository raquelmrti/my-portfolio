const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (e) => {
  const modalToggle = e.target.closest(".gallery__item-overlay");
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".icon-close");

  const modalOpen = function () {
    modal.classList.add("is-open");
    document.body.style.overflowY = "hidden";
  };

  const modalClose = function () {
    document.body.style.overflowY = "scroll";
    modal.classList.remove("is-open");
    modal.removeEventListener("click", modalClose);
  };

  closeButton.addEventListener("click", modalClose);
  closeButton.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      modalClose();
    }
  })

  modalOpen();

});

const liSobreMi = document.querySelector(".li-sobre-mi");
const liMisTrabajos = document.querySelector(".li-mis-trabajos");
const sobreMi = document.querySelector("#sobre-mi");
const misTrabajos = document.querySelector("#mis-trabajos");

const linkSobreMi = document.createElement("button");
linkSobreMi.classList.add("nav-button");
linkSobreMi.textContent = "Sobre mí";

const linkMisTrabajos = document.createElement("button");
linkMisTrabajos.classList.add("nav-button");
linkMisTrabajos.textContent = "Mis trabajos";

liSobreMi.addEventListener("click", () => {
  misTrabajos.style.display = "none";
  sobreMi.style.display = "block";
  liSobreMi.textContent = "Sobre mí";
  liMisTrabajos.innerHTML = "";
  liMisTrabajos.appendChild(linkMisTrabajos);
});

liMisTrabajos.addEventListener("click", () => {
  misTrabajos.style.display = "block";
  sobreMi.style.display = "none";
  liMisTrabajos.textContent = "Mis trabajos";
  liSobreMi.innerHTML = "";
  liSobreMi.appendChild(linkSobreMi);
});