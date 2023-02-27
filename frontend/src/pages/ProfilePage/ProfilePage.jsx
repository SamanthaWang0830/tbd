import React from 'react'
import './ProfilePage.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Posts from '../../components/posts/Posts'
import PlaceIcon from "@mui/icons-material/Place";

const ProfilePage = () => {
  return (
    <div className="profile">
        <div className="images">
            <img
                src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="cover"
            />
            <img
                src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
                className="profilePic"
            />
        </div>

        <div className="profileContainer">
            <div className="uInfo">
                <div className="left">
                    <a href="http://facebook.com">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a href="http://facebook.com">
                        <GitHubIcon fontSize="large" />
                    </a>
                </div>
                <div className="center">
                    <span>ZW</span>
                    <button>follow</button>
                </div>
                <div className="right">
                    <div className="info">
                        <div className="item">
                            <PlaceIcon />
                            <span>Canada</span>
                        </div>
                    </div>
                </div>
            </div>
            <Posts/>
        </div>
    </div>
  )
}

export default ProfilePage