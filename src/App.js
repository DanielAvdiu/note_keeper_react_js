import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import NoteList from './NoteList';
import NoteDetails from './NoteDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/notes/:id">
              <NoteDetails />
            </Route>

          </Switch>

      </div>

    </div>
    </Router>
  );
}

export default App;
