document.getElementById('enterButton').addEventListener('click', () => {
  const veil = document.getElementById('veil');
  veil.classList.remove('hidden');

  // Trigger visibility with animation
  setTimeout(() => {
    veil.classList.add('visible');
  }, 50);

  // Simulate transition to next page after animation
  setTimeout(() => {
    window.location.href = "app.html"; // replace this with your actual destination
  }, 3000); // 3 seconds of magic ✨
});
