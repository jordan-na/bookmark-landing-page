export const navbarController = (() => {
   const navbar = document.querySelector("ul.mobile");
   const navToggle = document.querySelector("#nav-toggle");
   const navItems = navbar.children;
   let closed = true;

   const toggle = () => {
      navbar.classList.toggle("open");
      const img = navToggle.firstElementChild;
      img.src = closed ? "images/icon-close.svg" : "images/icon-hamburger.svg";
      for(const item of navItems) {
         item.classList.toggle("animate");
      }
      closed = !closed;
   };

   return {
      toggle: toggle,
   };
})();
