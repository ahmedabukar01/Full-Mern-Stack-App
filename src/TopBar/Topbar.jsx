import './topbar.css';
import image from './images/hacker.jpg';
import {Link} from 'react-router-dom';

const Topbar = () =>{
    const user = false;

    return(
        <div className="top">
            <div className="topleft">
                <i className="topicons fab fa-pinterest-square"></i>
                <i className="topicons fab fa-instagram-square"></i>
                <i className="topicons fab fa-github-square"></i>
                <i className="topicons fab fa-twitter-square"></i>
            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="topListIcon">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="topListIcon">
                    <Link to="/about">About</Link>
                    </li>
                    <li className="topListIcon">
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li className="topListIcon">
                    <Link to="/write">Write</Link>
                    </li>
                    <li className="topListIcon">
                     {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topright">
                {
                    user ? (
                        <img 
                        className='topImg'
                        src={image}
                        alt=""
                        />
                    ): (
                        <ul className="toplist">
                            <li className="topListIcon">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="topListIcon">
                                <Link to="/register" >Register</Link>
                            </li>
                        </ul>
                    )
                }
                 <i className="topsearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar;