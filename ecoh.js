let boys = parseInt(window.prompt("Introduce el número de niños"))
let girls = parseInt(window.prompt("Introduce el número de niñas"))
let totalStudents = boys + girls

function percentage(number, total) {
  return number * 100 / total
}

let display = document.getElementById("display")
display.innerHTML = `
<div>
  <p>El resultado es el siguiente:</p>
  <p>Hay un ${percentage(boys, totalStudents).toFixed(2)}% de niños</p>
  <p>Hay un ${percentage(girls, totalStudents).toFixed(2)}% de niñas</p>

</div>
`
