import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../css/AllPosts.css'
import Post from './Post';
function Allposts() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const res = await axios.get(`${import.meta.env.VITE_BURL}/api/posts/getposts`);
    setPosts(res.data.posts)
  }

  useEffect(() => {
    fetchPosts();
  }, [])


  return (
    <div className='all-posts'>
      {posts.length ? (
        <>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </>
      ) : (
        <p>No posts available</p>
      )}
    </div>

  )
}

export default Allposts
