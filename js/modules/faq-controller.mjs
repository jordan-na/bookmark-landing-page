export const faqController = (() => {
   const show = function() {
      this.nextElementSibling.classList.toggle("invisible");
   };

   return {
      show: show
   };
})();