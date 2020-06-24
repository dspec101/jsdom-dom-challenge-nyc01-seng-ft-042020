// * A Counter that increases by 1 each second
// setinterval on counter (seconds)
// increment by one


document.addEventListener("DOMContentLoaded", () => {

const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const pageCounter = document.getElementById('counter')
const likeButton = document.getElementById("heart")
const likesUl = document.querySelector("body > ul")
const commentsDiv = document.getElementById("list")
submitButton = document.getElementById("submit")
commentFormContent = document.getElementById("comment-input")


console.log(likesUl)

// console.log(pageCounter)
let timer = setInterval(incrementFunc, 1000)
function incrementFunc () {
pageCounter.innerText = parseInt(pageCounter.innerText) + 1 
}
incrementFunc()

function decrementFunc () {
pageCounter.innerText = parseInt(pageCounter.innerText) - 1 
}

plusButton.addEventListener("click", incrementFunc)
minusButton.addEventListener("click", decrementFunc)


// likeButton.addEventListener("click", addLikes)
// function addLikes () {
// likesLi = document.createElement("li")
// // likes = parseInt(likesLI)
// likesLi.dataset.likes = 1



// // likesLi.innerText = parseInt(likesLi.innerText) + 1 
// likesUl.append(likesLi)
// }


submitButton.addEventListener("click", (e) => {
e.preventDefault()
newCommentDiv = document.createElement("div")
newComment = commentFormContent.value
newCommentDiv.innerText = newComment
commentsDiv.append(newCommentDiv)


})


})





/* <ul class='likes'></ul> */








// * Plus and Minus buttons that increment or decrement the counter
// click listener on the plus and minus buttons
// increment or decrement counter


// * A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
// find the like button
// click listener 
// increment likes

// * A comment box that adds comments when submitted