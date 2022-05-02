import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, add } from '../store/notes.js';
import RenderNotes from './RenderNotes.jsx';
import '../css/NewNote.css';

function NewNote() {

    let dispatch = useDispatch();
    let note = useSelector(state => state.note);
    const [currentNote, setCurrentNote] = useState('');

    useEffect(() => {
        const localStorageGet = () => {
            let items = JSON.parse(localStorage.getItem('noteArr'));
            for (let ii = 0; ii < items.length; ii++) {
                dispatch(add(items[ii].note));
            }
        }
        localStorageGet();
    }, [dispatch])

    useEffect(() => {
        const localStorageSet = () => {
            let items = JSON.stringify(note);
            localStorage.setItem('noteArr', items);
        }
        localStorageSet();
    }, [note])

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
            <RenderNotes note={note} handleRemove={handleRemove} />
        </div>
    );
}

export default NewNote;