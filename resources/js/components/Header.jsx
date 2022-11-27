import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import Avatar from '@mui/material/Avatar';

const homePage = { 
    pathname: "/"
  };

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <Link component={ Link } to={ homePage }>
                    <img src={logo} alt='Memo Tests Games' />
                </Link>      
            </div>
            <div className='user-session'>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            </div>
        </div>
    );
}

export default Header;