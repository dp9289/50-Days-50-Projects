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
        `<li style="margin-top: 7px;">
      <span>${item.name}</span>
      <button value="${item.id}">&times;</button>
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

function deleteItem(e) {
  if (e.target.matches("button")) {
    items = items.filter((item) => item.id !== parseInt(e.target.value));
    // console.log(e.target.value, items[0].id);
    displayItem();
    addItemsToLocalStorage();
  }
}
form.addEventListener("submit", handleSubmit);
list.addEventListener("click", deleteItem);
getItemsToLocalStorage();
