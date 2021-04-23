import { getJournalEntries, saveJournalEntry } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("submit")) {

            // stores the current entry object array in a variable
            const journalEntries = getJournalEntries()
                // stores the last items id in a variable
            const lastEntryId = journalEntries[journalEntries.length - 1].id
                // creates a new object with a unique id and calls the save function to store it in the database
            const newEntry = {
                id: lastEntryId + 1,
                date: document.querySelector(".entryDate").value,
                concept: document.querySelector(".entryConcepts").value,
                entry: document.querySelector(".entryJournal").value,
                mood: document.querySelector(".entryMood").value
            }
            saveJournalEntry(newEntry)
        }
    }
)



export const JournalForm = () => {
    return `
    <form class="entryForm">
            <fieldset>
                <label for="entryDate">Date</label>
                <input type="date" name="entryDate" class="entryDate">
            </fieldset>
            <fieldset>
                <label for="entryConcepts">Concepts covered:</label>
                <input type="text" name="entryConcepts" class="entryConcepts">
            </fieldset>
            <fieldset>
                <label for="entryJournal">Journal Entry</label>
                <input type="text" name="entryJournal" class="entryJournal">
            </fieldset>
            <fieldset>
                <label for="entryMood">Mood for the day</label>
                <select name="entryMood" class="entryMood">
                    <option value="1 star">*</option>
                    <option value="2 stars">**</option>
                    <option value="3 stars">***</option>
                    <option value="4 stars">****</option>
                    <option value="5 stars">*****</option>
                </select>
            </fieldset>
            <button id="submit-entry">Submit Entry</button>
        </form>
    `
}