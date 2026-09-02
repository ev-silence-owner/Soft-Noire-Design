const SKIP_KEY = "softnoire.skipArrival.v1";

const arrival = document.getElementById("arrival");
const interior = document.getElementById("interior");
const remember = document.getElementById("remember");
const enter = document.getElementById("enter");
const skip = document.getElementById("skip");
const restore = document.getElementById("restore");

function showInterior() {
  arrival.classList.add("hidden");
  arrival.hidden = true;
  interior.classList.remove("hidden");
  interior.hidden = false;
  restore.focus();
}

function showArrival() {
  interior.classList.add("hidden");
  interior.hidden = true;
  arrival.classList.remove("hidden");
  arrival.hidden = false;
  enter.focus();
}

function persistIfAsked() {
  if (remember?.checked) localStorage.setItem(SKIP_KEY, "1");
}

function clearPersist() {
  localStorage.removeItem(SKIP_KEY);
  if (remember) remember.checked = false;
}

enter?.addEventListener("click", () => {
  persistIfAsked();
  showInterior();
});

skip?.addEventListener("click", () => {
  persistIfAsked();
  showInterior();
});

restore?.addEventListener("click", () => {
  clearPersist();
  showArrival();
});

if (localStorage.getItem(SKIP_KEY) === "1") {
  showInterior();
}
