function Gallary(gallary) {
  if (!gallary) throw new Error("No Gallary");
  console.log(gallary);

  const images = Array.from(gallary.querySelectorAll("img"));
  const modal = document.querySelector(".modal");
  const prev = modal.querySelector(".prev");
  const next = modal.querySelector(".next");

  function openModal(e) {
    modal.querySelector("img").src = e.target.src;
    modal.querySelector("h2").textContent = e.target.title;
    modal.querySelector("p").textContent = e.target.dataset.description;
    if (modal.matches("open")) return;
    modal.classList.add("open");
  }
  images.forEach((image) => image.addEventListener("click", openModal));
}

const gallary1 = Gallary(document.querySelector(".gallery1"));
const gallary2 = Gallary(document.querySelector(".gallery2"));
