
/* Select the disclosure buttons */

let disclosureButtons = document.querySelectorAll(".js-disclosure-btn");

/* Select the icons */

let icons = document.querySelectorAll(".icon");

/* Create toggle function */

function toggleDisclosure() {
    if (this.getAttribute("aria-expanded") === "true") {
      disclosureButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
    } else {
      disclosureButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
      this.setAttribute("aria-expanded", "true");
    }
  }

/* Loop through the buttons, add event listener */

disclosureButtons.forEach(button => {
    button.addEventListener("click", toggleDisclosure)
});

