import React from 'react'

import HelpIcon from '@material-ui/icons/Help';
import EmailIcon from '@material-ui/icons/Email';
import PublishIcon from '@material-ui/icons/Publish';
import VisibilityIcon from '@material-ui/icons/Visibility';
import NotesIcon from '@material-ui/icons/Notes';
import SettingsIcon from '@material-ui/icons/Settings';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

function UserSidebar() {

    const toggleSidebar = () => {
        console.log('toggle side bar function activated')
    }

    return(
        <div className='sidebar'>
            <div className='visibility-arrow' onClick={toggleSidebar}>
                <SwapHorizIcon></SwapHorizIcon>
            </div>
            <div className='user-info'>
                <div>
                    Username and picture
                </div>
                <div>
                    About me: skfhsdfhusl
                <div>
                    Email: ailusheflieurh
                </div>
            </div>
            </div>
            <div 
                className="sidebar" 
                id="profile-sidebar"
            >
            <a href="#">
                <HelpIcon className="material-icons"></HelpIcon>
                <span class="icon-text">Help</span>
            </a>
            <a href="#">
                <EmailIcon className="material-icons"></EmailIcon>
                <span class="icon-text">Messages</span>
            </a>
            <a href="#">
                <PublishIcon className="material-icons"></PublishIcon>
                <span class="icon-text">Upload</span>
            </a>
            <a href="#">
                <VisibilityIcon className="material-icons"></VisibilityIcon>
                <span class="icon-text">Insights</span>
            </a>
            <a href="#">
                <NotesIcon className="material-icons"></NotesIcon>
                <span class="icon-text">Directory</span>
            </a>
            <a href="#">
                <SettingsIcon className="material-icons"></SettingsIcon>
                <span class="icon-text">Settings</span>
            </a>
            <br></br>
        </div>
    </div>
    )
};

export default UserSidebar