function togglemode() {
  alert("SENSITIVE CONTENT")
}
function togglemode1() {
  alert("CONTEÚDO SENSÍVEL")
}

window.addEventListener("DOMContentLoaded", function () {
  var firstItem = document.querySelector("ul li:first-child a")
  setInterval(function () {
    firstItem.classList.toggle("tremble-animation")
  }, 1000)
})
