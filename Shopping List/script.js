const form = document.querySelector("#form");
const list = document.querySelector(".list");

const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  //   e.currentTarget.item.value = '';
  displayItem();
  e.target.reset();
}

function displayItem() {
  const html = items
    .map(
      (item) =>
        `<li>
      <span>${item.name}</span>
      <button>&times;</button>
    </li>`
    )
    .join("");
  list.innerHTML = html;
}
form.addEventListener("submit", handleSubmit);
