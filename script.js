const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (e) => {
 const modalToggle = e.target.closest(".gallery__item-overlay");
 if (!modalToggle) return;

 const modal = modalToggle.parentNode.nextElementSibling;
 const closeButton = modal.querySelector(".icon-close");

 const modalOpen = function () {
  modal.classList.add("is-open");
  modal.style.animation = "modalIn 300ms forwards";
  document.body.style.overflowY = "hidden";
 };

 const modalClose = function () {
  document.body.style.overflowY = "scroll";
  modal.classList.remove("is-open");
  modal.removeEventListener("animationend", modalClose);
 };

 closeButton.addEventListener("click", function () {
  modal.style.animation = "modalOut 300ms forwards";
  modal.addEventListener("animationend", modalClose);
 });

 modalOpen();

});
