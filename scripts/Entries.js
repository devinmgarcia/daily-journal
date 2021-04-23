/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
// import { getJournalEntries } from "./database.js"
import { getEntries, getJournalEntries } from "./database.js";

export const Entries = () => {
    // original code has the assigning entries to the function instead of the return of the function. added () to correct
    const entries = getJournalEntries()

    // original code has this set to a const, leaving it unable to concatanate. changed to let to corret
    let allEntriesAsHTML = ``;

    for (const entry of entries) {
        allEntriesAsHTML += `
        <div class="journal-entry">
        <div class="date">Date Entered: ${entry.date}</div>
        <div class="concept">Concepts Covered: ${entry.concept}</div>
        <div class="entry">Journal Notes: ${entry.entry}</div>
        <div class="mood">Overall Mood Rating: ${entry.mood}</div>
        <div class="buttons">
            <button>Edit</button>
            <button>Delete</button>
        </div>
        </div>
            `
    }
    return allEntriesAsHTML;
};