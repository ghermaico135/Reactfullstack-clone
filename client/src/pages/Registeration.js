import React from 'react'
import axios from 'axios'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

function Registeration() {

    const Navigate = useNavigate()
    
    const initialValues ={
        username:"",
        password:""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3,).max(15).required(),
        password: Yup.string().min(4).max(15).required()
    })

    const onSubmit = (data) =>{
        axios.post("http://localhost:3001/auth",data).then((res)=>{
            console.log(res.data)
            Navigate("http://localhost:3001/auth/login")
        })
        
    }

  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="formContainer">
                <label>UserName</label>
                <ErrorMessage name="username" component="span" />
                <Field name="username" id="inputCreatePost" placeholder="miki" />

                <label>password</label>
                <ErrorMessage name="password" component="span" />
                <Field type="password" name="password" id="inputCreatePost" placeholder="1234nik" />
                <button type="submit"> Registration</button>
            </Form>
        </Formik>

    </div>
  )
}

export default Registeration