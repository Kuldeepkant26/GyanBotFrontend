import React, { useState } from 'react'
import '../css/post.css'

function Post({ post }) {
    const [isLiked, setisLiked] = useState(true);
    const [isSaved, setisSaved] = useState(true);
    const [menu,setMenu]=useState(false)
    function handelLike() {
        setisLiked(!isLiked);
    }
    function handelSave() {
        setisSaved(!isSaved)
    }

    return (
        <div className='post'>
            <div className="top">
                <p ><span className='profile'>{post.owner.name[0]}</span>{post.owner.name}</p>
                <i className="ri-more-fill" onClick={()=>setMenu(!menu)}></i>
                <div className="menu" style={{display:menu?'block':'none'}}>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Report</button>
                </div>
            </div>
            <img src={post.image} alt="" />
            <div className="bottom">
                <div className="left">
                    {isLiked ? <i className="ri-heart-fill liked" onClick={handelLike}></i> : <i className="ri-heart-line" onClick={handelLike} ></i>}

                    <i className="ri-chat-3-line"></i>
                    <i className="ri-send-plane-fill"></i>
                </div>
                {isSaved ? <i className="ri-bookmark-fill" onClick={handelSave}></i> : <i className="ri-bookmark-line" onClick={handelSave}></i>}

            </div>


        </div>
    )
}

export default Post
