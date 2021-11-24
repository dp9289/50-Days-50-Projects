const form = document.querySelector("#form");
const list = document.querySelector(".list");

function handleSubmit(e) {
    e.preventDefault();
  const item = e.currentTarget.item.value;
  const html = `
    <li>
    <span>${item}</span>
    <button>&times;</button>
    </li>
  `;
  list.innerHTML += html;
  //   e.currentTarget.item.value = '';
  e.target.reset();
}

form.addEventListener("submit", handleSubmit);
