import {useHistory, useParams} from "react-router-dom";
import NotesService from "../services/NotesService";
import {useEffect, useState} from "react";

const NoteDetails = () => {

    const {id} = useParams();
    const [currentNote, setCurrentNote] = useState('');
    const history = useHistory();

    useEffect(() => {
        NotesService.get(id)
            .then(response => {
                setCurrentNote(response.data);
            })
            .catch (err => {
                console.log(err);
            })
    }, []);

    const deleteNote = () => {
        NotesService.remove(id)
            .then(response => {
                if (response.status == 204) {
                    history.push("/");
                } else {
                    console.log("Unexpected response status", response);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const goBack = () => {
        history.push("/");
    }

    return (
        <div className="note-details main-content">
            <article>
                <h5 className="text-capitalize primary-color">{currentNote.title}</h5>
                <div className="mb-3 font-italic metadata">
                    <span>{currentNote.updatedAt}</span>
                    <span className="text-capitalize">, {currentNote.category}</span>
                </div>
                <div className="mb-3">{currentNote.body}</div>
            </article>
            <div className="text-left">
                <button onClick={goBack} className="btn-primary">Back</button>
                <button className="ml-3 btn-danger" onClick={deleteNote}>Delete</button>
            </div>
        </div>
    );
}

export default NoteDetails;