export const featuresController = (() => {
   const btns = document.querySelectorAll(".feature-btn");
   const svg = document.querySelector("#illustration-tab-1");
   let prevIndex = 0;
   const featureHeader = document.querySelector("#feature-header");
   const featureDescription = document.querySelector("#feature-description");
   const elementDetails = [
      {
         svgSrc: "images/illustration-features-tab-1.svg",
         header: "Bookmark in one click",
         description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites."
      },
      {
         svgSrc: "images/illustration-features-tab-2.svg",
         header: "Intelligent Search",
         description: "Our powersul search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
      },
      {
         svgSrc: "images/illustration-features-tab-3.svg",
         header: "Share your bookmarks",
         description: "Easily share your bookmarks and collection with others. Create a shareable link that you can send at the click of a button."
      }
   ];

   const changeSelected = function () {
      btns.forEach((btn) => {
         btn.classList.remove("selected");
      });
      this.classList.add("selected");
      const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);
      changeElements(index);
   };

   const changeElements = (i) => {
      const element = elementDetails[i];
      svg.src = element.svgSrc;
      if(prevIndex === 0 && i === 1 || prevIndex === 0 && i === 2) {
         svg.classList.add("shrink");
      } else if(prevIndex === 1 && i  === 0 || prevIndex === 2 && i === 0) {
         svg.classList.remove("shrink");
      }
      featureHeader.innerText = element.header;
      featureDescription.innerText = element.description;
      prevIndex = i;
   };

   return {
      changeSelected: changeSelected,
   };
})();
