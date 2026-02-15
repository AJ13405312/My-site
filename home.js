function celebrate() {

  // 🎉 BIG CONFETTI BURST
  confetti({
    particleCount: 200,
    spread: 120,
    startVelocity: 45,
    scalar: 1.2,
    origin: { y: 0.6 }
  });

  // 🎉 second burst for drama
  setTimeout(() => {
    confetti({
      particleCount: 120,
      spread: 160,
      origin: { y: 0.7 }
    });
  }, 400);

  // ⏳ Redirect after animation
  setTimeout(() => {
    window.location.href = "Birthday.html";
  }, 1200);

}