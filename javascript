window.addEventListener('click', () => {
  const audio = document.getElementById('bg-music');
  if (audio && audio.paused) {
    audio.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });
  }
});
