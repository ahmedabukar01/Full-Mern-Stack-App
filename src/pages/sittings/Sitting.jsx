import Sidebar from '../../Components/sidebar/Sidebar';
import './sitting.css';
import profileImg from '../assets/setup2.jpg';

const Sitting = () => {
    return (
        <div className='setting'>
           <div className="settingWrapper">
               <div className="settingTitle">
                   <span className="settingUpdateTitle">Update Your Account</span>
                   <span className="settingDeleteTitle">Delete Account</span>
               </div>
               <form className='settingsForm'>
                   <label>Profile picture</label>
                   <div className="settingsPP">
                       <img src={profileImg} alt="" />
                    <label htmlFor="fleInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}}/>
                   </div>
                   <label>Username</label>
                   <input type="text" placeholder='Ahmed' />
                   <label>Email</label>
                   <input type="email" placeholder='Ahmed@gmail.com' />
                   <label>password</label>
                   <input type="password" />
                   <button className="settingSubmit">Update</button>
               </form>
            </div> 
            <Sidebar />
        </div>
    )
}

export default Sitting
