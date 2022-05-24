import { LetterForm } from "./LetterForm.js"

export const Letters = () => {
    return `<h1>Pen Pal Society</h1>
    <section class="letterForm">
        ${LetterForm()}
    </section>

    <section class="displayedLetter">
        <h2>Sent Letters</h2>
        $letters goes here{}
    </section>
    `
}