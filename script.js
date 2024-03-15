
/* Select the disclosure buttons */

let disclosureButtons = document.querySelectorAll(".js-disclosure-btn");

function toggleDisclosure() {
    let isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
}

disclosureButtons.forEach(button => {
    button.addEventListener("click", toggleDisclosure)
});