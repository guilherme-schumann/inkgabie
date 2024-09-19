window.onscroll = function() {fixNavMenu()};

function fixNavMenu() {
    var nav = document.getElementById("navMenu");
    if (window.pageYOffset > 232) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
}