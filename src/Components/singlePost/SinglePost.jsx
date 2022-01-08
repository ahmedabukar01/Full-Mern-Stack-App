import './singlePost.css';
import singlePostImg from '../../pages/assets/setup2.jpg';

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src={singlePostImg} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor, sit adipisicing.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ahmed</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                     elit. Necessitatibus omnis odio cum vero magnam 
                     recusandae,
                     expedita vel sunt libero ab?
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                     elit. Necessitatibus omnis odio cum vero magnam 
                     recusandae,
                     expedita vel sunt libero ab?
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                     elit. Necessitatibus omnis odio cum vero magnam 
                     recusandae,
                     expedita vel sunt libero ab?
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                     elit. Necessitatibus omnis odio cum vero magnam 
                     recusandae,
                     expedita vel sunt libero ab?
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                     elit. Necessitatibus omnis odio cum vero magnam 
                     recusandae,
                     expedita vel sunt libero ab?
                     
                    </p>
            </div>
        </div>
    )
}

export default SinglePost
