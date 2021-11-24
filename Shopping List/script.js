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
      <input
      value=${item.id}
      type="checkbox"
      ${item.complete ? "checked" : ""}>
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

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  // console.log(e.target.value, items[0].id);
  displayItem();
  addItemsToLocalStorage();
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  displayItem();
  addItemsToLocalStorage();
}
form.addEventListener("submit", handleSubmit);
list.addEventListener("click", (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches("button")) {
    deleteItem(id);
  }
  if (e.target.matches("input[type='checkbox']")) {
    markAsComplete(id);
  }
});
getItemsToLocalStorage();
