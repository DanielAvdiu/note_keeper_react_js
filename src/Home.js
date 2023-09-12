import NoteList from './NoteList';
import useFetch from './useFetch';

const Home = () => {
    const {data: notes, isPending, error} = useFetch('http://localhost:8000/notes');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {notes && <NoteList notes={notes} title="All Notes" />}
        </div>
     );
}
 
export default Home;