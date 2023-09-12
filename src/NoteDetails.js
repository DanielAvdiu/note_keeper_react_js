import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const NoteDetails = () => {

    const { id } = useParams();
    const { data: note, error, isPending} = useFetch('http://localhost:8000/notes/' + id);
    const history=useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/notes/' + note.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    };

    return ( 
        <div className="note-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {note && ( 
                <article>
                    <h2>{note.title}</h2>
                    <div> {note.body} </div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default NoteDetails;