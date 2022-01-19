import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {id} = useParams();
    const  [detail, setDetail] = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>res.json())
        .then((data)=>setDetail(data))
    }, []);

    const [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res)=>res.json())
        .then((data)=>setComments(data))

    })
    return (
        <div>
            <h2>{detail.id}</h2>
            <h3>{detail.title}</h3>
            <p>{detail.body}</p>
            {
                comments.map((comment)=><li>{comment.name}: {comment.email}</li>)
            }
        </div>
    );
};

export default PostDetail;