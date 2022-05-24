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
            let topicName = []
            for (const letterTopic of letter.topicId) {
                for (const topic of topics) {
                    if (letterTopic === topic.id)
                        topicName.push(topic.name)
                }
            }
            return topicName.join(", ")
        }

    

    // const topicList = topics.map((topic) => {
    //     return letter.topicId === topic.id
    // })

    // const foundTopic = topics.find((topic) => {
    //     return letter.topicId === topic.id
    // })

    let messageHtml = `<li class="posted__letter">`

    messageHtml += `Dear ${foundRecipient.name} (${foundRecipient.email}),<br>`

    messageHtml += `${letter.message} <br>`

    messageHtml += `Sincerely, ${foundAuthor.name} (${foundAuthor.email})<br>`

    let today = new Date(letter.dateSent)
    let todayDate = today.toLocaleDateString()
    messageHtml += `Sent on ${todayDate} <br>`

    messageHtml += `${topicArr(letter)}`

    messageHtml += `</li>`
    return messageHtml
}


let html = `<ul>
        ${letters.map(letterHtml).join("")}
    </ul>`

return html

}