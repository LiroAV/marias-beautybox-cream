const revealAnswer1 = document.getElementsByClassName('reveal1')[0]
const answer1 = document.getElementsByClassName('antwort1')[0]

revealAnswer1.addEventListener('click', () => {
  answer1.classList.toggle('active')
})

const revealAnswer2 = document.getElementsByClassName('reveal2')[0]
const answer2 = document.getElementsByClassName('antwort2')[0]

revealAnswer2.addEventListener('click', () => {
    answer2.classList.toggle('active')
  })

const revealAnswer3 = document.getElementsByClassName('reveal3')[0]
const answer3 = document.getElementsByClassName('antwort3')[0]

revealAnswer3.addEventListener('click', () => {
    answer3.classList.toggle('active')
  })

const revealAnswer4 = document.getElementsByClassName('reveal4')[0]
const answer4 = document.getElementsByClassName('antwort4')[0]

revealAnswer4.addEventListener('click', () => {
    answer4.classList.toggle('active')
  })