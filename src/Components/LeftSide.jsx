import './LeftSide.css';
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import ExploreIcon from '@mui/icons-material/Explore'
import ReelIcon from '@mui/icons-material/MusicVideo'
import MessgeIcon from '@mui/icons-material/MailOutline'
import NotificationIcon from '@mui/icons-material/FavoriteBorder'
import CreateIcon from '@mui/icons-material/AddBoxOutlined'
import ThreadIcon from '@mui/icons-material/GestureOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import profilePhoto from '../assets/profile.jpg'
import instagramLogo from '../assets/instagramLogo.svg'

const LeftSide = () => {
  return (
    <div className="leftSidePart">
        <div className="logoPart">
            <img className='logoImg' src={instagramLogo} alt="Instagram" />
        </div>
        <div className="navLinkPart">
          <div className="navLink">

            {/* HOME ICON */}
            <HomeIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
            <div className="navName">Home</div>
          </div>

          {/* SEARCH ICON */}
          <div className="navLink">
            <SearchIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
            <div className="navName">Search</div>
          </div>
          {/* EXPLORE */}
          <div className="navLink">
            <ExploreIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
            <div className="navName">Explore</div>
          </div>
          
          <div className="navLink">
            <ReelIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
            <div className="navName">Reel</div>
          </div>
          
          <div className="navLink">
            <MessgeIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
            <div className="navName">Message</div>
          </div>
          
          <div className="navLink">
            <NotificationIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
            <div className="navName">Notifications</div>
          </div>
          
          <div className="navLink">
            <CreateIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
            <div className="navName">Create</div>
          </div>
          
          <div className="navLink">
            <img className='profileImg' src={profilePhoto} alt="profile image" />
            <div className="navName">Profile</div>
          </div>
            

            <div className="belowPart">
              <div className="navLink">
                <ThreadIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
                <div className="navName">Threads</div>
              </div>
              <div className="navLink">
                <MenuIcon sx={{fontSize: "30px ", margin: "0 2opx 0 0"}} />
                <div className="navName">More</div>
              </div>
            </div>
              

        </div>
    </div>
  )
}

export default LeftSide