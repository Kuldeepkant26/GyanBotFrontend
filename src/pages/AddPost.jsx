import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import Nav from '../Components/Nav';
import '../css/AddPost.css'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/MyProvider';
import { toast } from 'react-toastify';
function AddPost() {
    const { currUser } = useContext(MyContext);
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const fileInputRef = useRef(null);  // Create a ref to access the file input element

    async function handelUpload() {
        try {
            toast.info("Uploading");
            const formData = new FormData();
            formData.append('myfile', file);
            formData.append('title', title);  // Title
            formData.append('description', description);  // Description

            axios.post(`${import.meta.env.VITE_BURL}/api/posts/add/${currUser._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then((res) => {
                    toast.success(res.data.message);
                    // Clear the file input field
                    setFile(null);  // Clear file state
                    setDescription('')
                    setTitle('')
                    navigate(`/profile/${currUser._id}`)
                    fileInputRef.current.value = '';  // Reset the input field
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.response.data.message);
                });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='bg-black add-post'>

            <div className="add-post-form">
                <h1>
                    <p>Fill post details </p>
                    <i className='ri-close-large-line cursor-pointer' onClick={() => navigate(-1)}></i>
                </h1>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter post title' />
                <label htmlFor="image">Choose image</label>
                <input
                id='image'
                    type="file"
                    ref={fileInputRef}  // Attach the ref to the file input
                    onChange={(e) => setFile(e.target.files[0])}
                    placeholder='Choose image'
                />
                <textarea name="" id="" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='About yout post' ></textarea>
                <button onClick={handelUpload}>Upload</button>
            </div>

        </div>

    );
}
export default AddPost;