import React from 'react';
import { Avatar, Button } from '@chakra-ui/react';
import './left.css';
import { Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { MdNotifications, MdNotificationsNone } from 'react-icons/md';
import { BsBookmarks, BsBookmarksFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { RiFileListLine, RiFileListFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export default function Left() {
  const [logoutPopUp, setLogoutPopUp] = React.useState(false);
  const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        navigate('/');
    }
  return (
    <div className="left">
      <div className="mid">
        <div className="tem0">
          <Link to="/home">
            <img
              src="https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png"
              alt=""
            />
          </Link>
        </div>
        <div className="tem1">
          <Link to="/home">
                <>
              <VscHome
                size={25}
                onClick={() => {
                  handleClick('home');
                }}
              />
              </>
            
          </Link>
        </div>
        <div className="tem1">
          {' '}
          <Link to="">
            {' '}
              <MdNotifications
                size={25}
                onClick={() => {
                  handleClick('noti');
                }}
              />
          </Link>
        </div>

        <div className="tem1">
          <Link to="">
              <BsBookmarksFill
                size={25}
                onClick={() => {
                  handleClick('book');
                }}
              />
          </Link>
        </div>
        <div className="tem1">
          <Link to="">
            
              
              <RiFileListFill
                size={25}
                onClick={() => {
                  handleClick('story');
                }}
              />
            {/* )} */}
          </Link>
        </div>
        <hr style={{backgroundColor:"gray", borderColor:"gray", marginRight:"15px", marginLeft:"-10px"}} />
        <div className="tem1">
          
          <Link to="">
            <FiEdit size={25} />
          </Link>
        </div>
      </div>
      <div>
        <Avatar
          marginLeft={'-2vh'}
          marginTop={'10vh'}
          style={{ cursor: 'pointer' }}
          onClick={()=>{setLogoutPopUp(!logoutPopUp)}}
        ></Avatar>
      </div>
      {
        logoutPopUp ? (<div style={{position:"absolute", bottom:"43px", left:"87px"}}>
          <Button onClick={handleLogout}>Logout</Button>
        </div>) : null
      }
    </div>
  );
}
