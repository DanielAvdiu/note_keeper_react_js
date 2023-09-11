import {useState, useEffect} from 'react';
import NoteList from './NoteList';
const Home = () => {
    const [notes, setNotes] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/notes')
                .then(res => {
                    if(!res.ok) { 
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setNotes(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 400);
    }, []);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {notes && <NoteList notes={notes} title="All Notes" />}
        </div>
     );
}
 
export default Home;