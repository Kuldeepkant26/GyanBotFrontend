import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../css/AllPosts.css'
import Post from './Post';
import { toast } from 'react-toastify'
function Allposts() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BURL}/api/posts/getposts`);
      setPosts(res.data.posts)
    } catch (error) {
      toast.warning(error.response.data.message);
    }
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
        <h1 className='text-white'>No posts available</h1>
      )}
    </div>

  )
}

export default Allposts
