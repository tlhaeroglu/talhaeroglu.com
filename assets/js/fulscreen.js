var BODY = document.getElementById("body");
var BOOL = false;

BODY.addEventListener("click", control);

function openFullscreen() {
  if (BODY.requestFullscreen) {
    BODY.requestFullscreen();
  } else if (BODY.webkitRequestFullscreen) {
    /* Safari */
    BODY.webkitRequestFullscreen();
  } else if (BODY.msRequestFullscreen) {
    /* IE11 */
    BODY.msRequestFullscreen();
  }
}

function control() {
  if (!BOOL) {
    openFullscreen();
    BOOL = true;
  }
}
