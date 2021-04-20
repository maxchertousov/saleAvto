window.onload = function () {
  document.body.classList.add('loaded_hiding');
  //document.html.style.overflow = 'hidden';
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}