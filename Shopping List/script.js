const form = document.querySelector("#form");
const list = document.querySelector(".list");

let items = [];

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
  addItemsToLocalStorage();
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

function addItemsToLocalStorage() {
  localStorage.setItem("items", JSON.stringify(items));
}

function getItemsToLocalStorage() {
  const listItems = JSON.parse(localStorage.getItem("items"));
  if (listItems.length) items = listItems;
  displayItem();
}
form.addEventListener("submit", handleSubmit);
getItemsToLocalStorage();