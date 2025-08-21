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
   console.log(menu);
    function openMenu(e) {
      this.classList.toggle("open--menu");
      menu.classList.toggle("hidden");
      menu.classList.toggle(
        "absolute",
        "flex-col",
        "duration-300",
        "bg-orange-500",
        "border-2",
        "border-orange-500",
        "shadow-2xl",
        "top-0",
        "left-0",
        "w-full",
        "py-8",
        "px-4"
      );
    }
  };
}
