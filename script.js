const devForm = document.getElementById("devForm")
const techList = document.getElementById("techList")
const btnAddTech = document.getElementById("btnAddTech")

const devs = []

const createTechRow = () => {
  const techRow = document.createElement("div")
  techRow.className = "techRow"

  const inputTech = document.createElement("input")
  inputTech.type = "text"
  inputTech.placeholder = "Tecnologia"
  inputTech.required = true

  const radioName = "experience"
  const experienceLevels = ["0-2 anos", "3-4 anos", "5+ anos"].map(level => {
    const label = document.createElement("label")
    const radio = document.createElement("input")
    radio.type = "radio"
    radio.name = radioName
    radio.value = level
    radio.required = true
    label.append(radio, ` ${level}`)
    return label
  })

  const btnRemove = document.createElement("button")
  btnRemove.type = "button"
  btnRemove.textContent = "Remover"
  btnRemove.addEventListener("click", () => techList.removeChild(techRow))

  techRow.append(inputTech, ...experienceLevels, btnRemove)
  techList.appendChild(techRow)
}

btnAddTech.addEventListener("click", createTechRow)

devForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const devName = document.getElementById("devName").value
  const techs = Array.from(document.querySelectorAll(".techRow")).map(row => {
    const techName = row.querySelector("input[type='text']").value
    const radio = row.querySelector("input[type='radio']:checked")
    return techName && radio ? { tech: techName, experience: radio.value } : null
  }).filter(Boolean)

  devs.push({ name: devName, techs })
  console.log(devs)

  devForm.reset()
  techList.innerHTML = ""
})
