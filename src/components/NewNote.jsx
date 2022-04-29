function NewNote() {
    return (
        <div>
            {/* Just installed @reduxjs/toolkit, need to create store and implement provider. I think I will create an array of objects. I can then use properties on those objects to determine what to do with each note. */}
            <label for="note">New note:</label>
            <input id="note" type="text" />
        </div>
    );
}

export default NewNote;