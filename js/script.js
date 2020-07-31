var cambioImagen = function () {
  var $this = $(this);
  var nuevaImagen = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', nuevaImagen);
}

$(function () {
  $('img.imagen').hover(cambioImagen, cambioImagen);
});

function myFunction() {
  var x = document.getElementById("linksresponsive");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}