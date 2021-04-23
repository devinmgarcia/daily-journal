const dispatchEvent = () => {
    const stateChangeEvent = new CustomEvent("entryStateChange")
    return stateChangeEvent
}

const database = {
    entries: []
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json()) // Parse as JSON
        .then(parseEntries => {
            database.entries = parseEntries
        })
}

export const getJournalEntries = () => {
    const copyOfData = [...database.entries]
    return copyOfData
}

export const saveJournalEntry = (newJournalEntry) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(getJournalEntries)
        .then(dispatchEvent)
}