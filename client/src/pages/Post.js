import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Post() {
    const {id} = useParams()
    const [postObject, setPostObject] = useState({})
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")

    useEffect(() =>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=>{
                setPostObject(response.data)
          })

          axios.get(`http://localhost:3001/comments/${id}`).then((response)=>{
            setComments(response.data)
      }) 
    },[])

    const addComment = () =>{
      axios.post(`http://localhost:3001/comments`,{comment:newComment, PostId:id}).then((response)=>{
        // console.log("It works")
        let addComment ={comment:newComment}
        setComments([...comments,addComment])
        setNewComment("")
  }) 
    }
  return (
    <div className="postPage">
        <div className="leftSide">
            <div className="title">{postObject.title}</div>
            <div className="body">{postObject.postText}</div>
            <div className="footer">{postObject.username}</div>
        </div>
        <div className="rightSide">
          <div className="addCommentContainer">
            <input type="text" placeholder='Enter comment'  value={newComment} onChange={(event)=>{
              setNewComment(event.target.value)
            }}/>
            <button type="submit" onClick={addComment}>Add Comment</button>
          </div>
          <div className="listOfComments">
            {comments.map((comment,key)=>{
                return(
                  <div className="comments" key={key}>{comment.comment}</div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Post