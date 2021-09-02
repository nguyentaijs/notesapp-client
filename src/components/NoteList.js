import React, {useEffect, useState} from 'react';
import NotesService from '../services/NotesService';
import {Link} from "react-router-dom";


const NoteList = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        NotesService.getAll()
            .then(response => {
                console.log(response);
                setNotes(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div className="main-content">
            <h4>List of Notes</h4>
            <div className="notes-list mt-4">
                {
                    notes && notes.map(note => (
                        <div key={note.id} className="notes-preview mt-3">
                            <Link to="#">
                                <h5 className="primary-color text-capitalize">
                                    {note.title}
                                </h5>
                                <p>{note.body}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default NoteList;
