import React,{useContext} from 'react'
import './HomePage.scss'
import Posts from '../../components/posts/Posts'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { SearchContext } from '../../context/searchContext';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import MarkdownReviewer from '../../components/MarkdownReviewer';
import { Link } from "react-router-dom";

const HomePage = () => {
  const {setQuery}= useContext(SearchContext)
  return (
    <div className="home">
      <div className="search">
        <SearchOutlinedIcon />
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={e=>setQuery(e.target.value)}
        />
      </div>
      <Link
        to="/new"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <NoteAddIcon/>
      </Link>
      <Posts/>
    </div>
  )
}

export default HomePage