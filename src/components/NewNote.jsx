import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, add } from '../store/notes.js';

function NewNote() {

    let dispatch = useDispatch();
    let note = useSelector(state => state.note);
    const [currentNote, setCurrentNote] = useState('');

    const handleAdd = () => {
        dispatch(add(currentNote));
    }

    const handleRemove = (item) => {
        dispatch(remove(item));
    }

    const handleNoteChange = (e) => {
        setCurrentNote(e.target.value);
    }

    return (
        <div>
            {/* Just installed @reduxjs/toolkit, need to create store and implement provider. I think I will create an array of objects. I can then use properties on those objects to determine what to do with each note. */}
            <label>New note:</label>
            <input onChange={handleNoteChange} id="note" type="text" />
            <input type="submit" value="Submit" onClick={handleAdd} />
            {console.log(note)}
        </div>
    );
}

export default NewNote;