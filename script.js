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

// Função para mostrar os itens ocultos
function showHiddenItems() {
  const existingItems = document.querySelectorAll("ul li.seesaw-item")
  existingItems.forEach((item) => {
    item.style.display = "list-item"
  })

  // Ocultar o botão após clicar nele
  const showButton = document.getElementById("show-hidden-items")
  showButton.style.display = "none"
}

// Evento de clique no botão para mostrar os itens ocultos
const showButton = document.getElementById("show-hidden-items")
showButton.addEventListener("click", showHiddenItems)
