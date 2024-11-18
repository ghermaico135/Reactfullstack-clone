import React from 'react'
import axios from "axios"
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


function CreatePost() {

    const navigate = useNavigate()
    const initialValues ={
        postText:"",
        title:"",
        username:""
    }
    const validationSchema =Yup.object().shape({
        postText:Yup.string().required('post text is required'),
        title:Yup.string().required('title is required'),
        username:Yup.string().min(3,'username must be at least 3 characters').max(15,'username must be at least 15 characters').required('UserName is required')
    })

    const onSubmit = (data) =>{
        axios.post('http://localhost:3001/posts',data).then((response) =>{
            navigate("/")
        })
      
    }

 
  return (
    <div className="createPostPage">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="formContainer">
                <label>PostText</label>
                <ErrorMessage name="postText" component="span"/>
                <Field 
                name="postText" 
                id="inputCreatePost" 
                placeholder="Mr.dani" />
                 <label>PostText</label>
                 <ErrorMessage name="title" component="span"/>
                <Field 
                name="title" 
                id="inputCreatePost" 
                placeholder="Junior" />

                <label>UserName</label>
                <ErrorMessage name="username" component="span"/>
                 <Field 
                name="username" 
                id="inputCreatePost" 
                placeholder="dani123" />
                <button type="submit" >Create Post</button>
            </Form>
          
            
        </Formik>
    </div>
  )
}

export default CreatePost