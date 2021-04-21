import { Entries } from "./Entries.js"
import { JournalForm } from "./JournalForm.js"


export const DailyJournal = () => {
    return `
        <article class="entryForm">
        ${JournalForm()}
        </article>

        <div class="entryList">
            ${ Entries() }
        </div>
    `
}

// import { Entries } from "./Entries.js"
// import { JournalForm } from "./JournalForm.js"

// export const DailyJournal = () => {

// }