import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Post = (props) => {
    const {id,title, body}= props.post;
    const navigate = useNavigate();
    const handleClick = (postId)=>{
        navigate(`/post/${postId}`)
    }
   
    return (
        <div>
            <h1>id: {id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            
            <Link to={`/post/${id}`}> <button>Post Detail of {id}</button></Link>
            <button onClick={()=>handleClick(id)}>Detail of this user</button> 
        </div>
    );
};

export default Post;