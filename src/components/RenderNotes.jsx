import { Card } from 'react-bootstrap';

function RenderNotes({ note, handleRemove }) {
    return (
        <div id="all-cards">
            {note ? note.map((curNote, idx) => (
                <Card key={idx}>
                    <Card.Title onClick={() => handleRemove(curNote.id)}>Remove note</Card.Title>
                    <Card.Body>{curNote.note}</Card.Body>
                </Card>
            )) : null}
        </div>
    );
}

export default RenderNotes;
