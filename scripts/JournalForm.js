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
            <button>Submit Entry</button>
        </form>
    `
}