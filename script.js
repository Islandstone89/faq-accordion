
/* Select the disclosure buttons */

let disclosureButtons = document.querySelectorAll(".js-disclosure-btn");

/* Select the icons */

let icons = document.querySelectorAll(".icon");

/* Create toggle function */

function toggleDisclosure() {
    let isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    let icon = this.firstElementChild;
    
    if (icon.getAttribute("src", "assets/images/icon-plus.svg")) {
        icon.setAttribute("src", "assets/images/icon-minus.svg")
    }

    else if (icon.getAttribute("src", "assets/images/icon-minus.svg")) {
        icon.setAttribute("src", "assets/images/icon-plus.svg")
    }
    
    else {
        return;
    }
}

/* Loop through the buttons, add event listener */

disclosureButtons.forEach(button => {
    button.addEventListener("click", toggleDisclosure)
});

