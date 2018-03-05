// Sticky Nav code

const nav = document.getElementsByTagName('nav');
const topOfNav = nav[0].offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixedNav');
  } else {
    document.body.classList.remove('fixedNav');
  }
}

window.addEventListener('scroll', fixNav);

// Slide box code

function showContent(e) {
  if (e.target.className === 'box__header') {
    e.target.nextElementSibling.classList.toggle('slideInDown');
    e.target.nextElementSibling.classList.toggle('slideInUp');

    const content = Array.from(e.target.nextElementSibling.children);
    content.forEach(function(elem) {
      elem.classList.toggle('hidden');
      elem.classList.toggle('show');
    });

    e.target.children[0].classList.toggle('rotateClockwise');
    e.target.children[0].classList.toggle('rotateCounterClockwise');
  }
}

window.addEventListener('click', showContent);

// Scroll

let linksElements = document.getElementsByTagName('a');
let RegExpression = /#$/;

let linksArray = Array.from(linksElements).filter(function(a) {
  return !RegExpression.test(a.href);
});

let linksHref = linksArray.map(function (a) {
  return a.href;
});

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    let scrollTo = e.target.href;
    let index = scrollTo.search(/#/);
    let id = scrollTo.slice(index + 1);
    let targetElem = document.getElementById(id);

    if (linksHref.includes(scrollTo)) {
      e.preventDefault();
      let targetPosition = targetElem.offsetTop;
      let timer = setInterval(frame, 20);
      let currentPosition = window.pageYOffset;
      let timeForScrolling = Math.abs(targetPosition - currentPosition);

      setTimeout(function () {
        clearInterval(timer);
      }, timeForScrolling);

      function frame() {
        if (window.pageYOffset >= targetPosition) {
          currentPosition -= 40;
          window.scroll(0, currentPosition);
        }

        if (window.pageYOffset < targetPosition) {
          currentPosition += 40;
          window.scroll(0, currentPosition);
        }
      }
    }
  }
});
