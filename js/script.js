/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = document.querySelectorAll(".nav-link");
const navContainer = document.querySelector(".nav-links");
const navIndicator = document.querySelector(".nav-indicator");
const sections = document.querySelectorAll("section");

const menuToggle = document.querySelector(".menu-toggle");


/* =========================================================
   MOVE NAV INDICATOR
========================================================= */

function moveIndicator(link) {

    const linkLeft = link.offsetLeft;
    const linkWidth = link.offsetWidth;

    navIndicator.style.left = `${linkLeft}px`;
    navIndicator.style.width = `${linkWidth}px`;

}


/* =========================================================
   INITIAL POSITION
========================================================= */

const activeLink = document.querySelector(".nav-link.active");

if (activeLink) {
    moveIndicator(activeLink);
}


/* =========================================================
   CLICK NAVIGATION
========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        moveIndicator(this);

    });

});


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

            moveIndicator(link);

        }

    });

});


/* =========================================================
   HAMBURGER MENU
========================================================= */

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        navContainer.classList.toggle("active");

    });

}


/* =========================================================
   CLOSE MENU WHEN NAV LINK IS CLICKED
========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menuToggle) {

            menuToggle.classList.remove("active");

        }

        if (navContainer) {

            navContainer.classList.remove("active");

        }

    });

});

/* =========================================================
   WELCOME SCREEN
========================================================= */

const welcomeScreen = document.querySelector(".welcome-screen");

if (welcomeScreen) {

    window.addEventListener("load", () => {

        /*
         * Give the opening animation enough time
         * to finish before starting the exit.
         */

        setTimeout(() => {

            welcomeScreen.classList.add("hide");

        }, 3000);

    });


}

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".profile, " +
    ".education, " +
    ".skills, " +
    ".work-experience, " +
    ".organization, " +
    ".experience-item, " +
    ".project-card, " +
    ".article-card, " +
    ".cv-content, " +
    ".contact-content, " +
    ".contact-item"
);


revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            } else {

                entry.target.classList.remove("active");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});