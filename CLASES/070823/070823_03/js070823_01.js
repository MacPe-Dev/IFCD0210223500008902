
// Acción Botón 1
var btn1 = document.getElementById("uno");
btn1.addEventListener("click", () => {
    createModal(`
      <h3>Alumno</h3>
      <img src="media/avatar1.jpg" alt="">
      <a href="#" target="_blank" rel="noopener noreferrer">Ficha completa</a>
    `, "modal-desdeArriba")
  })
  const createModal = (content = "sin contenido", style = "") => {
    modal_container.innerHTML = `
      <div class="modal" id="modal">
        <div class="modal-content ${style}">
          ${content}
          <button class="modal-btn-closed" id="modal_btn_closed">x</button>
        </div>
      </div>
    `
    document.getElementById("modal").addEventListener("click", (e) => {
      console.log(e.target.id)
      if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
        modal_container.innerHTML = ""
      }
    })
  }