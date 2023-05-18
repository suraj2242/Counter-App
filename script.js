let value = 0;
let text = document.querySelector("input");

function increment() {
  value += 1;
  text.value = value;
}

function decrement() {
  value -= 1;
  text.value = value;
}

function reset() {
  value = 0;
  text.value = value;
}
