import React, { useState } from 'react'
import { marked } from 'marked'
import { Remarkable } from "remarkable"
import './NewPostPage.scss'
import TextareaAutosize from 'react-textarea-autosize';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const md = new Remarkable()

const NewPostPage = () => {
    const [text, setText] = useState('');

    const handleTextChange = (value) => {
        setText(value);
    };

    const handleSave = () => {
        console.log(JSON.stringify(text))
        console.log(text)
    };

  return (
    <div>
      <ReactQuill value={text} onChange={handleTextChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default NewPostPage