import { fetchAuthors, fetchLetters, fetchRecipients, fetchTopics } from "./dataAccess.js"
import {Letters } from "./Letters.js"


const mainContainer = document.querySelector("#container")

const render = () => { 
    fetchAuthors()
        .then(() => fetchRecipients())
        .then(() => fetchTopics())
        .then(() => fetchLetters())
        .then(() => {
            mainContainer.innerHTML = Letters()
        })
}


render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
