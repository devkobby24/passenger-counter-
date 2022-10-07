// initialize count to 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")

console.log(countEl)

let count = 0

function increment() {
  count += 1
  countEl.textContent = count
  console.log(count)

}


function save() {
  let counter = count + " - "
  saveEl.textContent += counter
  countEl.textContent = 0
  count = 0

  console.log(count)
}










