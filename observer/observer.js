const terms = document.querySelector(".terms-and-conditions");
const btn = document.querySelector(".accept");
console.log(btn);

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    btn.disabled = false;
    console.log(payload[0]);
  } else {
    btn.disabled = true;
  }
}

const obs = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});
obs.observe(terms.lastElementChild);
