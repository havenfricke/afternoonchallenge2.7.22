//function defined


let redScore = 0

let blueScore = 0


function scoreRed() {
  let redElem = document.getElementById('redScore')
  redElem = document.getElementById('redScore')

  redElem.innerText = redScore++
  draw()
}
function scoreBlue() {
  let blueElem = document.getElementById('blueScore')
  blueElem = document.getElementById('blueScore')

  blueElem.innerText = blueScore++
  draw()
}


