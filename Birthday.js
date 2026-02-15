// 💌 Auto-changing flirty text with heartbeat
const flirtyLines = [
  "Hey… mi amor 😏",
  "Still here? I like that 😘",
  "You smile without trying, don’t you? 💕",
  "Yeah… this part was intentional 😌",
  "I made this thinking about you 💖"
];

let flirtIndex = 0;

function nextFlirt() {
  flirtIndex = (flirtIndex + 1) % flirtyLines.length;
  const el = document.getElementById("flirtText");
  
  // remove & re-add heartbeat class to trigger animation
  el.classList.remove("heartbeat");
  void el.offsetWidth; // force reflow
  el.classList.add("heartbeat");
  
  el.textContent = flirtyLines[flirtIndex];
}

// Change flirty text every 3 seconds
setInterval(nextFlirt, 3000);

// 🔒 Reveal secret message on click
function revealSecret() {
  document.getElementById("secretMessage").style.display = "block";
}

