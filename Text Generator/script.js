const text = document.querySelector("#text");
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
const output = document.querySelector("#output");

const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };

function sarcastic(letter, index) {
  if (index % 2 == 0) {
    return letter.toLowerCase();
  }
  return letter.toUpperCase();
}
function funky(letter) {
    let funky = funkyLetters[letter];
    if(funky) return funky;
    funky = funkyLetters[letter.toLowerCase()];
    if(funky) return funky;
    return letter;
}

function unable() {}
function transformText(text) {
  const checkedInput = filterInputs.find((inputChecked) => inputChecked.checked).value;
  const result = Array.from(text).map(checkedInput);
  output.textContent = result.join("");
}

text.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  transformText(e.target.value);
});
