import './post.css';
import postImg from '../../pages/assets/setup2.jpg';

const Post = () => {
    return (
        <div className="post">
            <img 
            className='postImg'
            src={postImg} alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem, ipsum 
                    dolor sit
                    amet consectetur adipisicing 
                    elit.
                 </span>
                 <hr />
                 <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet
                 consectetur, adipisicing elit.
                  Quidem officiis sapiente facere, 
                  quas modi odit ducimus reiciendis.
                 Numquam, eveniet magnam.
                Lorem ipsum dolor sit amet
                 consectetur, adipisicing elit.
                  Quidem officiis sapiente facere, 
                  quas modi odit ducimus reiciendis.
                 Numquam, eveniet magnam.
            </p>
        </div>
    )
}

export default Post
