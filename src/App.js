import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "./components/NoteList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={NoteList}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
