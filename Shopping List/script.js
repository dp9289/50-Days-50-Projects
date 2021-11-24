const form = document.querySelector("#form");
const list = document.querySelector(".list");

const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  //   e.currentTarget.item.value = '';
  e.target.reset();
}

form.addEventListener("submit", handleSubmit);
