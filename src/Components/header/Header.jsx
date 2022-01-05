import './header.css';
import setup from '../pages/assets/setup.jpg';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitlesm">React & Node</span>
                <span className="headerTitlelg">Blog</span>
            </div>
            <img src={setup} className='headerImg' alt="" />
        </div>
    )
}

export default Header
