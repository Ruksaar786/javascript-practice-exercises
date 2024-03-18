let count = 0;

const display = () => {
  let span = document.getElementById("output");
  span.innerText = count;
};

function increase() {
  count += 1;
  display();
}

function decrease() {
  count -= 1;
  display();
}

function resetClock() {
  stopClock();
  duration = 0;
  setTime();
}
