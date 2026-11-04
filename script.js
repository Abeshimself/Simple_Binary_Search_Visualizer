const arr = [3, 8, 12, 19, 25, 31, 42, 47, 56, 63, 71, 80];
let low, high, mid, finished;

function reset() {
  low = 0;
  high = arr.length - 1;
  mid = -1;
  finished = false;
  show("Click Next step");
}

function show(message) {
  const box = document.getElementById("array");
  box.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = arr[i];

    if (i < low || i > high) cell.classList.add("out");   // already ruled out
    if (i === mid) cell.classList.add("mid");             // middle being checked
    if (finished && i === mid) cell.classList.add("found");

    box.appendChild(cell);
  }

  document.getElementById("msg").textContent = message;
}

function nextStep() {
  if (finished) return;

  const target = Number(document.getElementById("target").value);

  if (low > high) {
    finished = true;
    mid = -1;
    show("Not found");
    return;
  }

  mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    finished = true;
    show("Found at index " + mid);
  } else if (arr[mid] < target) {
    show(arr[mid] + " is too small, so go right");
    low = mid + 1;
  } else {
    show(arr[mid] + " is too big, so go left");
    high = mid - 1;
  }
}

reset();