import { LetterForm } from "./LetterForm.js"
import { PostedLetters } from "./LetterOutput.js"

export const Letters = () => {
    return `<h1>Pen Pal Society</h1>
    <section class="letterForm">
        ${LetterForm()}
    </section>

    <section class="displayedLetter">
        <h2>Sent Letters</h2>
        ${PostedLetters()}
    </section>
    `
}