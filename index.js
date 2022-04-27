console.log('Hello World')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector("input");

let movie = document.createElement(`li`);
let movieTitle = document.createElement(`span`)
movieTitle.textContent = inputField.value
movieTitle.addEventListener(`click`, crossOffMovie)

movie.appendChild(movieTitle)
document.querySelector(`ul`).appendChild(movie)

let deleteBtn = document.createElement('button')
deleteBtn.textContent = 'x'
deleteBtn.addEventListener(`click`, deleteMovie)
movie.appendChild(deleteBtn)

inputField.vaule = ``

  return document.querySelector(`ul`).appendChild(movie)
}
