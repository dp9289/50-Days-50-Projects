const text = document.querySelector("#text");
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
const output = document.querySelector("#output");


function sarcastic(letter, index) {
  if (index % 2 == 0) {
    return letter.toLowerCase();
  }
  return letter.toUpperCase();
}
function funky() {}
function unable() {}
function transformText(text) {
  const filter = filterInputs.find((inputChecked) => inputChecked.checked);
  const result = Array.from(text).map(sarcastic);
  output.textContent = result.join("");
}

text.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  transformText(e.target.value);
});
