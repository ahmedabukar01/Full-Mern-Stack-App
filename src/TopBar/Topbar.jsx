import './topbar.css';
import image from './images/hacker.jpg';

const Topbar = () =>{

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
                    <li className="topListIcon">Home</li>
                    <li className="topListIcon">About</li>
                    <li className="topListIcon">Contact</li>
                    <li className="topListIcon">Write</li>
                    <li className="topListIcon">logout</li>
                </ul>
            </div>
            <div className="topright">
                <img 
                 className='topImg'
                 src={image}
                 alt=""
                 />
                 <i className="topsearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar;