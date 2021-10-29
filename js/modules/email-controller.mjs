export const emailController = (() => {
   const emailInputContainer = document.querySelector("form div");
   const emailInput = document.querySelector(`input[type="email"]`);
   const errorIcon = document.querySelector("form svg");
   const errorMssg = document.querySelector("form p");
   const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   const showError = (evt) => {
      if (!emailRegex.test(emailInput.value.toLowerCase())) {
         evt.preventDefault();
         emailInputContainer.classList.add("error");
         errorIcon.classList.remove("hidden");
         errorMssg.classList.remove("hidden");
      }
   };

   const removeError = () => {
      emailInputContainer.classList.remove("error");
      errorIcon.classList.add("hidden");
      errorMssg.classList.add("hidden");
   };

   return {
      showError: showError,
      removeError: removeError
   }
})();
