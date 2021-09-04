import {useEffect, useState} from "react";
import NotesService from "../services/NotesService";
import {useHistory, useParams} from "react-router-dom";

const NoteAdd = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('programming');
    const history = useHistory();
    const {id} = useParams();
    const [error, setError] = useState(false);

    const createNote = (e) => {
        e.preventDefault();
        if (!body || !title) {
            setError(true);
            return;
        }
        const note = {id, title, body, category};

        if (id) { // update
            NotesService.update(note)
                .then(response => {
                    console.log("Update Success", response);
                    history.push("/");
                })
                .catch(err => {
                    console.error(err);
                });
        } else { // add
            NotesService.create(note)
                .then(response => {
                    console.log("Add Success", response);
                    history.push("/");
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }

    useEffect(() => {
        if (id) {
            NotesService.get(id)
                .then(response => {
                    setTitle(response.data.title);
                    setBody(response.data.body);
                    setCategory(response.data.category);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }, []);


    return (
        <div className="create">
            <h5 className="text-center">{id ? "Update Note" : "Add note"}</h5>
            <div className="text-center">
                {error && <span className="text-danger font-italic">Mandatory fields are required</span>}
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Note title<sup>*</sup></label>
                    <input type="text" name="title" id="title" className="form-control"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Description<sup>*</sup></label>
                    <textarea name="body" id="body" className="form-control"
                              value={body}
                              onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="programming">Programming</option>
                        <option value="english">English</option>
                        <option value="gaming">Gaming</option>
                        <option value="forFun">For Fun</option>
                    </select>
                </div>
                <div className="text-center">
                    <button onClick={(e) => createNote(e)}> {id ? "Update" : "Add"}</button>
                </div>
            </form>
        </div>
    );
}

export default NoteAdd;