(() => {
  const refs = {
    openModalBtn: document.querySelector(".header-button"),
    closeModalBtn: document.querySelector(".header-close-button"),
    modal: document.querySelector(".mob-menu"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
