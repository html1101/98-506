// ACCESSING GLOBALS DIFFERENT WAYS
document.getElementById("global-this-button")
  .addEventListener("click", () => globalThis.alert("Hello from globalThis!"));

document.getElementById("window-button")
  .addEventListener("click", () => window.alert("Hello from window!"));

document.getElementById("no-object-button")
  .addEventListener("click", () => alert("Hello without explicit object!"));

// TAB/WINDOW/SCREEN
const innerHeightEl = document.getElementById("inner-height");
const screenXEl = document.getElementById("screen-x");

function updateWindowInfo() {
  innerHeightEl.textContent = window.innerHeight;
  screenXEl.textContent = window.screenX;
}
updateWindowInfo();
window.addEventListener("resize", updateWindowInfo);

document.getElementById("update-screen-x")
    .addEventListener("click", () => updateWindowInfo())

document.getElementById("new-window")
  .addEventListener("click", () => window.open("https://example.com", "_blank"));

document.getElementById("scroll-1000")
  .addEventListener("click", () => window.scrollTo({ top: 1000, behavior: "smooth" }));

document.getElementById("show-scroll")
  .addEventListener("click", () => alert("scrollY = " + window.scrollY));

// NAVIGATION
document.getElementById("history-length").textContent = history.length;
document.getElementById("location-href").textContent = location.href;

document.getElementById("reload-page")
  .addEventListener("click", () => location.reload());

let historyCounter = 1
document.getElementById("push-state")
  .addEventListener("click", async () => {
    window.history.pushState({}, null, `?num=${historyCounter}`)
    historyCounter++
  });

// TIMING
let intervalId = null;
let counter = 0;
const timerCount = document.getElementById("timer-count");

document.getElementById("start-interval")
  .addEventListener("click", () => {
    if (intervalId) return;
    intervalId = setInterval(() => {
      counter++;
      timerCount.textContent = counter;
    }, 1000);
  });

document.getElementById("stop-interval")
  .addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
  });

document.getElementById("timeout-button")
  .addEventListener("click", () => {
    setTimeout(() => alert("Timeout after 2 seconds!"), 2000);
  });

// DOM & OTHER APIs
document.getElementById("doc-title")
  .addEventListener("click", () => alert(document.title));

document.getElementById("perf-now")
  .addEventListener("click", () => alert("performance.now() = " + performance.now().toFixed(2)));

document.getElementById("crypto-random")
  .addEventListener("click", () => {
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    alert("Random value: " + arr[0]);
  });

// MISCELLANEOUS
let animating = false;
document.getElementById("raf-demo")
  .addEventListener("click", () => {
    const box = document.getElementById("raf-box");
    let pos = 0;
    animating = !animating;
    function step() {
      if (!animating) return;
      pos = (pos + 2) % 200;
      box.style.left = pos + "px";
      requestAnimationFrame(step);
    }
    step();
  });

document.getElementById("style-demo")
  .addEventListener("click", () => {
    const box = document.getElementById("raf-box");
    const style = getComputedStyle(box);
    alert("Box background: " + style.backgroundColor);
  });

document.getElementById("selection-demo")
  .addEventListener("click", () => {
    const sel = getSelection();
    alert("Selection: " + sel.toString());
  });

// DOM TRAVERSAL
const traversalResult = document.getElementById("traversal-result");

document.getElementById("first-child")
  .addEventListener("click", () => {
    traversalResult.textContent = document.getElementById("traversal-parent").firstChild.nodeName;
  });

document.getElementById("first-element-child")
  .addEventListener("click", () => {
    traversalResult.textContent = document.getElementById("traversal-parent").firstElementChild.nodeName;
  });

document.getElementById("parent-element")
  .addEventListener("click", () => {
    traversalResult.textContent = document.getElementById("traversal-child-1").parentElement.id;
  });

document.getElementById("next-element-sibling")
  .addEventListener("click", () => {
    const sib = document.getElementById("traversal-child-1").nextElementSibling;
    traversalResult.textContent = sib ? sib.nodeName : "None";
  });

document.getElementById("contains-test")
  .addEventListener("click", () => {
    const parent = document.getElementById("traversal-parent");
    const child = document.getElementById("traversal-child-1");
    traversalResult.textContent = parent.contains(child);
  });

// ATTRIBUTES
const attrTarget = document.getElementById("attr-target");
const attrResult = document.getElementById("attr-result");

document.getElementById("show-attrs")
  .addEventListener("click", () => {
    attrResult.textContent = Array.from(attrTarget.attributes).map(a => `${a.name}=${a.value}`).join(", ");
  });

document.getElementById("get-attr")
  .addEventListener("click", () => {
    attrResult.textContent = attrTarget.getAttribute("data-demo");
  });

document.getElementById("set-attr")
  .addEventListener("click", () => {
    attrTarget.setAttribute("data-demo", "updated");
    attrResult.textContent = "Updated!";
  });

document.getElementById("has-attr")
  .addEventListener("click", () => {
    attrResult.textContent = attrTarget.hasAttribute("data-demo");
  });

document.getElementById("remove-attr")
  .addEventListener("click", () => {
    attrTarget.removeAttribute("data-demo");
    attrResult.textContent = "Removed!";
  });

// HTML ELEMENT METHODS
const input = document.getElementById("html-input");
const exampleAlert = document.getElementById("example-alert")

exampleAlert.addEventListener("click", () => alert("Example alert clicked!"))

document.getElementById("click-input")
  .addEventListener("click", () => exampleAlert.click());

document.getElementById("focus-input")
  .addEventListener("click", () => input.focus());

document.getElementById("blur-input")
  .addEventListener("click", () => setTimeout(() => input.blur(), 2000));
