import React from 'react';
import Avtar from './avtar';
import './createPost.css';

// import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: 115,
    left: '50%',
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CreatePost = (props) => {

     const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Share your mood</h2>
          <TextareaAutosize aria-label="minimum height" rowsMin={5} cols='50' placeholder="say something" />
          <ImageIcon fontSize="large" /> 
          <input  type="file" />
          
          <div style={{ marginTop:'10px'}}>        <Button color="primary" onClick={handleClose}>Cancel</Button>
        <Button variant="contained" color="primary"> Share</Button></div>

      {/* <CreatePost /> */}
    </div>
  );
    

    
    return <div style={{ display: 'flex', justifyContent: 'center',marginBottom:'50px' }}>
      <Avtar url="avtar.jpg" width="60px" height="60px" />
       {/* <Avatar aria-label="recipe" className={classes.avatar}>
            D
          </Avatar> */}
        

        <input class="c-checkbox" type="checkbox" id="checkbox"/>
<div class="c-formContainer">
  <form class="c-form" action="">
    <input class="c-form__input" placeholder="share" type="text" onClick={handleOpen} required/>
    <label class="c-form__buttonLabel" for="checkbox">
      <button class="c-form__button" type="button">Send</button>
    </label>
    <label class="c-form__toggle" for="checkbox" data-title="Create Post"></label>
  </form>
</div>

        <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        </div>

    </div>
}

export default CreatePost;