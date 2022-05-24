import { getAuthors, getRecipients, getTopics, saveLetter } from "./dataAccess.js"

export const Authors= () => {
    const authors = getAuthors()

    return `<div class="dropdown">
        <select id="author">
            <option value="0">Choose Author</option>
            ${authors.map((author) => {
                return `<option value="${author.id}">${author.name}</option>`
            }).join("")
        }
        </select>`
}

export const Recipients = () => { 
    const recipients = getRecipients()

    return `<div class="dropdown">
        <select id="recipient">
            <option value="0">Choose Recipient</option>
            ${recipients.map((recipient) => {
                return `<option value="${recipient.id}">${recipient.name}</option>`
            }).join("")
        }
        </select>`
}

export const Topics = () => { 
    const topics = getTopics ()

    return ` <ul class="topic_list">
        ${topics.map((topic) => {
            return `<l1 class="topic_item"><input type="checkbox" name="topic" value="${topic.id}" />${topic.name}
            </li>`
        }).join("")
        }
    </ul>
    `
}
export const LetterText = () => { 
    return `<div class="textArea">
        <label for="letterText"></label>
        <textarea id="letterText" name="letterText" rows="5" cols="50"></textarea>
    </div>
    `
}

export const LetterForm = () => { 
    return `<article>
        <h3>Author</h3>
        ${Authors()} 

        <h3>Letter</h3>
        ${LetterText()}

        <h3>Topics</h3>
        ${Topics()}

        <h3>Recipient</h3>
        ${Recipients()}
    </article>

    <button class="button" id="sendLetter">Send Letter</button>`
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") { 
        const selectedAuthor = document.querySelector("#author").value
        const selectedRecipient = document.querySelector("#recipient").value
        const selectedTopic = document.querySelectorAll("input[name='topic']:checked");
            let outputTopic = [];
            selectedTopic.forEach((topic) => {
                outputTopic.push(parseInt(topic.value))})
        const typedLetter = document.querySelector("#letterText").value
        
        const dataToSendToAPI = {
            authorId: parseInt(selectedAuthor),
            recipientId: parseInt(selectedRecipient),
            topicId: outputTopic, 
            message: typedLetter, 
            dateSent: Date.now(),
        }
        saveLetter(dataToSendToAPI)
    }

})
