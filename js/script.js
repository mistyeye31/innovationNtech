window.onload = function () {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

const primaryNav = document.getElementById('navigation');
const displayButton = document.getElementById('displayMenu');

displayButton.addEventListener("click", slideMenu);

function slideMenu() {
    let visibility = primaryNav.getAttribute("data-visible");

    // if button is clicked, open the menu
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        displayButton.setAttribute("data-visible", "true");
    }
    else {
        primaryNav.setAttribute("data-visible", "false");
        displayButton.setAttribute("data-visible", "false");
    }
}

