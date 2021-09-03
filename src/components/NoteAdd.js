import {useState} from "react";
import NotesService from "../services/NotesService";
import {useHistory} from "react-router-dom";

const NoteAdd = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('programming');
    const history = useHistory();

    const createNote = (e) => {
        e.preventDefault();
        const note = {title, body, category};

        NotesService.create(note)
            .then(response => {
                console.log("Success", response);
                history.push("/");
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="create">
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
                    <button onClick={(e) => createNote(e)}>Add note</button>
                </div>
            </form>
        </div>
    );
}

export default NoteAdd;