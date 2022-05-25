import { getAuthors, getRecipients, sentLetter, getTopics } from "./dataAccess.js"

export const PostedLetters = () => {
    const letters = sentLetter()
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()


    const letterHtml = (letter) => {
        const foundAuthor = authors.find((author) => {
            return letter.authorId === author.id
        })
        const foundRecipient = recipients.find((recipient) => {
            return letter.recipientId === recipient.id
        })
        const topicArr = (letter) => {
            let topicName = ""
            for (const letterTopic of letter.topicId) {
                for (const topic of topics) {
                    if (letterTopic === topic.id) {
                        topicName += `<div class="topic_name">${topic.name} </div>`
                    }
                }
            }
            return topicName
        }


    let messageHtml = `<article class="posted__letter">\
        <div>Dear ${foundRecipient.name} (${foundRecipient.email}),</div><br>
        <div>${letter.message}</div><br>
        <div>Sincerely, ${foundAuthor.name} (${foundAuthor.email})</div><br>`

    let today = new Date(letter.dateSent)
    let todayDate = today.toLocaleDateString()

    messageHtml += `<div class="date">Sent on ${todayDate}</div><br>
        <div class="topics">${topicArr(letter)}</div>
    </article>`

    return messageHtml
}


let html = `<section>
        ${letters.map(letterHtml).join("")}
    </section>`

return html

}