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
                <i class="ri-more-fill" onClick={()=>setMenu(!menu)}></i>
                <div className="menu" style={{display:menu?'block':'none'}}>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Report</button>
                </div>
            </div>
            <img src={post.image} alt="" />
            <div className="bottom">
                <div className="left">
                    {isLiked ? <i class="ri-heart-fill liked" onClick={handelLike}></i> : <i class="ri-heart-line" onClick={handelLike} ></i>}

                    <i class="ri-chat-3-line"></i>
                    <i class="ri-send-plane-fill"></i>
                </div>
                {isSaved ? <i class="ri-bookmark-fill" onClick={handelSave}></i> : <i class="ri-bookmark-line" onClick={handelSave}></i>}

            </div>


        </div>
    )
}

export default Post
