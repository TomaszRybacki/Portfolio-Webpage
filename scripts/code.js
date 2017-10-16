/*jslint es6 */

// Sticky Nav code

const nav = document.getElementsByTagName("nav");
const topOfNav = nav[0].offsetTop;

function fixNav() {
    "use strict";
    if (window.scrollY >= topOfNav) {
        document.body.classList.add("fixedNav");
    } else {
        document.body.classList.remove("fixedNav");
    }
}

window.addEventListener("scroll", fixNav);

// Slide box code

const headerElem = document.getElementsByClassName("boxHeader");
const headerArray = Array.from(headerElem);

function clickHeader(e) {
    "use strict";
    e.target.nextElementSibling.classList.toggle("slideInDown");
    e.target.nextElementSibling.classList.toggle("slideInUp");
    e.target.nextElementSibling.children[0].classList.toggle("hidden");
    e.target.nextElementSibling.children[1].classList.toggle("hidden");
    e.target.nextElementSibling.children[0].classList.toggle("show");
    e.target.nextElementSibling.children[1].classList.toggle("show");
    e.target.children[0].classList.toggle("rotateClockwise");
    e.target.children[0].classList.toggle("rotateCounterClockwise");
}

headerArray.forEach(function (item) {
    "use strict";
    item.addEventListener("click", clickHeader);
});

// Smooth scrolling

function scrollIt(destination, duration = 200, easing = "linear") {

    const easings = {
        linear(t) {
            return t;
        }
    };

    const start = window.pageYOffset;
    const startTime = "now" in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;

    const destinationOffset = typeof destination === "number" ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);


    if ("requestAnimationFrame" in window === false) {
    window.scroll(0, destinationOffsetToScroll);
        return;
  }


  function scroll() {
        const now = "now" in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
            return;
        }

    requestAnimationFrame(scroll);
    }

    scroll();
}

// Destination

const titleElem = document.getElementById("title");
const startElem = document.getElementById("start");
const skillElem = document.getElementById("skill");

const linksElem = document.querySelectorAll("a[href*='#']");


linksElem[0].onclick = function (e) {
    "use strict";
    e.preventDefault();
    scrollIt(titleElem, 1000, "linear");
};

linksElem[1].onclick = function (e) {
    "use strict";
    e.preventDefault();
    scrollIt(startElem, 1000, "linear");
};

linksElem[2].onclick = function (e) {
    "use strict";
    e.preventDefault();
    scrollIt(skillElem, 1000, "linear");
};
