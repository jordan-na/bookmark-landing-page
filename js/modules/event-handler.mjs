import { faqController } from "./faq-controller.mjs";
import { emailController } from "./email-controller.mjs";
import { featuresController } from "./features-controller.mjs";
import { navbarController } from "./navbar-controller.mjs";

export const eventHandler = (() => {
   const setupNavbarListeners = () => {
      const navToggle = document.querySelector("#nav-toggle");
      navToggle.addEventListener("click", navbarController.toggle);
   };

   const setupFeaturesListeners = () => {
      document.querySelectorAll(".feature-btn").forEach((btn) => {
         btn.addEventListener("click", featuresController.changeSelected);
      });
   };

   const setupFaqListeners = () => {
      document.querySelectorAll(".faq-btn").forEach((btn) => {
         btn.addEventListener("click", faqController.show);
      });
   };

   const setupEmailListeners = () => {
      const emailInput = document.querySelector(`input[type="email"]`);
      const submitBtn = document.querySelector("form button");
      submitBtn.addEventListener("click", emailController.showError);
      emailInput.addEventListener("keydown", emailController.removeError);
   }

   const setupEventListeners = () => {
      setupNavbarListeners();
      setupFeaturesListeners();
      setupFaqListeners();
      setupEmailListeners();
   };

   return {
      setupEventListeners: setupEventListeners
   };
})();