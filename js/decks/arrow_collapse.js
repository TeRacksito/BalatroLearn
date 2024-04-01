document.querySelectorAll(".deck-collapse").forEach(function(icon) {
    icon.addEventListener("click", function() {
      this.children[0].classList.toggle("open");
    });
  });