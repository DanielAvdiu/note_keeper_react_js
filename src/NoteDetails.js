import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

const NoteDetails = () => {

    const { id } = useParams();
    const { data: note, error, isPending} = useFetch('http://localhost:8000/notes/' + id);

    return ( 
        <div className="note-details">
            <h2>Note Details - {id}</h2>
        </div>
     );
}
 
export default NoteDetails;