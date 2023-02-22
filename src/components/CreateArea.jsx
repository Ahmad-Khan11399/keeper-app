import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [expand, setting]=useState(false);
  const [row, setRow]=useState(1);
  const [fab, setFab]=useState(false);


  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();

  }
  function Clicked(){
    setting(true);
    setRow(3);
    setFab(true);


  }

  return (
    <div>
      <form className="create-note">
        {expand === true &&
         (<input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />)
    }
        <textarea
          name="content"
          onClick={Clicked}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={row}
        />

        {fab===true &&
          <Zoom in={true}>
          <Fab onClick={submitNote}>
          <AddIcon/>
          </Fab>
          </Zoom>}


      </form>
    </div>
  );
}

export default CreateArea;
