const blinkDashes = document.querySelectorAll('.blink-dash');

blinkDashes.forEach(dash => {
  let blinkTimer = setInterval(() => {
    dash.classList.toggle('blink-dash--active');
  }, 500);
});