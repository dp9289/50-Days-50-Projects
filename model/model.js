const btns = document.querySelectorAll("button");
const outterModel = document.querySelector(".model-outter");
const innerModel = document.querySelector(".model-inner");

function handleButtonClick(e) {
  const button = e.currentTarget;
  const imgCont = button.closest(".img_container");
  const imgsrc = imgCont.querySelector("img").src;
  const desc = imgCont.querySelector("h2").innerText;
  innerModel.innerHTML = `
        <img src="${imgsrc.replace("200", "500")}" width="500" height="500"/>
        <p>${desc}</p>
    `;
  outterModel.classList.add("open");
}

btns.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

function closeModel() {
  outterModel.classList.remove("open");
}

outterModel.addEventListener("click", () => {
  closeModel();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModel();
  }
});
