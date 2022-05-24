const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

const applicationState = {
    authors: [],
    recipients: [],
    topics: [],
    sentLetter: []
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({ ...author }))
}
export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({ ...recipient }))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic }))
}
export const sentLetter = () => {
    return applicationState.sentLetter.map(sent => ({ ...sent }))
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.authors = data
            })
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.recipients = data
        })
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data
        })
}

export const saveLetter = (requestComplete) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestComplete)
    }


    return fetch(`${API}/sentLetter`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchLetters = () => {
    return fetch(`${API}/sentLetter`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.sentLetter = data
            }
        )
}