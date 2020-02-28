window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myNavbar").style.fontSize = "10px";
  } else {
    document.getElementById("myNavbar").style.fontSize = "12px";
  }
}
