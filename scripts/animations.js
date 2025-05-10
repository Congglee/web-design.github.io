// Simple script for animation controls
document.addEventListener('DOMContentLoaded', function () {
  const animElement = document.getElementById('animation-element');
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');

  playBtn.addEventListener('click', function () {
    animElement.className = 'animated-element play';
  });

  pauseBtn.addEventListener('click', function () {
    animElement.className = 'animated-element pause';
  });
});