export default class Header {
  constructor(container, nav) {
    this.container = document.querySelector(container);
    this.nav = document.querySelector(nav);
  }
  mostrarElemento = function () {
    const button = this.nav.nextElementSibling;
    const listaMenu = document.querySelector(".list--menu");
    return this.eventoHamburgerMenu(button, listaMenu);
  };

  eventoHamburgerMenu = function (listMenu, menu) {
    listMenu.addEventListener("click", openMenu);

    function openMenu(e) {
      this.classList.toggle("open--menu");

      menu.classList.remove("hidden");
      menu.classList.add(
        "absolute",
        "flex-col",
        "bg-red-500",
        "top-0",
        "left-0",
        "w-full",
        "py-8",
        "px-4"
      );
    }
  };
}
