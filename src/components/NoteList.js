import React, {useState} from 'react';

const NoteList = () => {

    const [notes, setNotes] = useState([
        {title: "first note", body: "Some desc", category: "random cate", id: 1},
        {title: "2nd note", body: "Some desc", category: "test cate", id: 2},
        {title: "3rd note", body: "Some desc", category: "random cate", id: 3}
    ])

    return (
        <div>
            <h1>List of Notes</h1>
            {
                notes.map(note => (
                    <div>
                        <p>{note.title}</p>
                        <p>{note.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default NoteList;
