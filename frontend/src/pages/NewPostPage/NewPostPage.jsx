import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './NewPostPage.scss'
import ReactMarkdown from "react-markdown";

const NewPostPage = () => {
  const navigate=useNavigate()
  const [text, setText] = useState('');

  const textChangeHandler = (e) => {
    setText(e.currentTarget.value);
  };

  const submitHandler = () => {
    console.log(JSON.stringify(text))
    console.log(text)
    navigate('/')
  };

  return (
    <div className='newPost'>
      <div className="title">Markdown Editor</div>
      
      <div className="container">
        <div className="text">
          <div>Markdown Text</div>
          <textarea onChange={textChangeHandler} />
        </div>

        <div className="preview">
          <div className='preview-title'>Converted Text</div>
          <div className="preview-area">
            <ReactMarkdown children={text} />
          </div>
        </div>
      </div>
      <button onClick={submitHandler}>Save</button>
    </div>
  );
}

export default NewPostPage