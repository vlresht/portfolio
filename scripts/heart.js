const heart = document.querySelector('.heart');
if (heart) {
  let beatTimer = setInterval(() => {
    heart.classList.toggle('heart--small');  
  }, 500);
}