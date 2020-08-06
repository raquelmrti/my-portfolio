const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (e) => {
  const modalToggle = e.target.closest(".gallery__item-overlay");
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".icon-close");

  const modalOpen = function () {
    modal.classList.add("is-open");
    /* modal.style.animation = "modalIn 300ms forwards"; */
    document.body.style.overflowY = "hidden";
  };

  const modalClose = function () {
    document.body.style.overflowY = "scroll";
    modal.classList.remove("is-open");
    modal.removeEventListener("click", modalClose);
  };

  closeButton.addEventListener("click", function () {
    // modal.style.animation = "modalOut 300ms forwards";
    modal.addEventListener("click", modalClose);
  });

  modalOpen();

});

let linkSobreMi = document.querySelector(".link-sobre-mi");
let linkMisTrabajos = document.querySelector(".link-mis-trabajos");

/* function changeLink() {

  let misTrabajos = document.querySelector("#mis-trabajos");

  if (misTrabajos.style.display == "none") {
    document.querySelector(".link-mis-trabajos").innerHTML="<a href=#>Mis trabajos</a>";
    document.querySelector(".link-sobre-mi").innerHTML="Sobre mí";
  }

  else {
    document.querySelector(".link-sobre-mi").innterHTML="prueba";
    document.querySelector(".link-mis-trabajos").innerHTML="Mis trabajos";
  }
} */

function addLinkMisTrabajos() {
  linkSobreMi.innerHTML="Sobre mí";
  linkMisTrabajos.innerHTML="<a href=#>Mis trabajos</a>"
}

function addLinkSobreMi() {
  linkSobreMi.innerHTML="<a href=#>Sobre mí</a>";
  linkMisTrabajos.innerHTML="Mis trabajos"
}

linkSobreMi.addEventListener("click", function () {
  document.querySelector("#mis-trabajos").style.display = "none";
  document.querySelector("#sobre-mi").style.display = "block";

  addLinkMisTrabajos();
});

linkMisTrabajos.addEventListener("click", function () {
  document.querySelector("#mis-trabajos").style.display = "block";
  document.querySelector("#sobre-mi").style.display = "none";

  addLinkSobreMi();
});
