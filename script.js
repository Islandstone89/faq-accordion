
/* Select the disclosure buttons */

let disclosureButtons = document.querySelectorAll(".js-disclosure-btn");

/* Select the icons */

let icons = document.querySelectorAll(".icon");

/* Create toggle function */

function toggleDisclosure() {
    let isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
}

/* Loop through the buttons, add event listener */

disclosureButtons.forEach(button => {
    button.addEventListener("click", toggleDisclosure)
});

