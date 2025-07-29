let input = document.querySelector("input");

let button = document.querySelector("button");

let ul = document.querySelector("ul");

function addTodo() {
  let task = input.value.trim();

  if (task === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerText = task;

  let delButton = document.createElement("button");
  delButton.innerText = "Delete";

  delButton.classList.add("delete-button", "btn", "btn-danger");
  delButton.style.marginLeft = "30px";

  delButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delButton);
  ul.appendChild(li);
  input.value = "";
}

button.addEventListener("click", addTodo);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
