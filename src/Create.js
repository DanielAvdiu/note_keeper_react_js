import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState('false');//for loading message
    const history=useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();//prevent page refresh
        const note = { title, body };

        setIsPending(true);

        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
        }).then(() => {
            console.log('new note added');
            setIsPending(false);
           // history.go(-1);//go back to previous page
           history.push('/');//go back to home page
        });
    }

    return (
        <div className="create">
            <h2>Add a New Note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Note body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                {!isPending && <button>Add Note</button>}
                {isPending && <button disabled>Adding Note...</button>}

                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}

export default Create;