import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Post() {
    const {id} = useParams()
    const [postObject, setPostObject] = useState({})

    useEffect(() =>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=>{
                setPostObject(response.data)
          })
    })
  return (
    <div className="postPage">
        <div className="leftSide">
            <div className="title">{postObject.title}</div>
            <div className="body">{postObject.postText}</div>
            <div className="footer">{postObject.username}</div>
        </div>
        <div className="rightSide">comment session</div>
    </div>
  )
}

export default Post