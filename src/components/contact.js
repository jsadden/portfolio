import React, {Component} from 'react';
import {Formik} from 'formik';
import {FormElem, ContactSchema} from './contactHelp';
import emailjs from 'emailjs-com';


class Contact extends Component {

    state={
        feedback:'',
        success: null
        
    }


    sendEmail(values, cb) {
        emailjs.send('default_service', 'template_PB5cBo3d', {
            from_name: values.firstname + " " + values.lastname,
            from_email: values.email,
            message_html: values.message
        }, 'user_dLK36apdXXTb5ig9vXFLI')
        .then(response => {
            this.setState({success: true})
            cb()
            setTimeout(() => {
                this.setState({success: null})
                
            }, 3000);

        }, (err) => {
            console.log(err)
            this.setState({success: false})
        })
    }

    render(){
        return (
            <div className='contact'>
                <div className='form_container'>

                
                <h3>Shoot me a message</h3>
                <Formik
                    initialValues={{
                        email: '',
                        firstname: '',
                        lastname: '',
                        message: ''
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={(values, {resetForm}) => {
                        
                        this.sendEmail(values, resetForm)    
                    }}

                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <label>Email:</label>

                            <FormElem 
                                elData={{element: 'input', type:'text', value:values.email}}
                                placeholder = 'Email address'
                                name='email'
                                onHandleChange={(e) => handleChange(e)}
                                onHandleBlur={(e) => handleBlur(e)}
                                errors = {errors.email}
                                touched = {touched.email}
                            />

                            <label>Your Name:</label>
                            <FormElem 
                                elData={{element: 'input', type:'text', value:values.firstname}}
                                placeholder = 'First name'
                                name='firstname'
                                onHandleChange={(e) => handleChange(e)}
                                onHandleBlur={(e) => handleBlur(e)}
                                errors = {errors.firstname}
                                touched = {touched.firstname}
                            />

                            <FormElem 
                                elData={{element: 'input', type:'text', value:values.lastname}}
                                placeholder = 'Last name'
                                name='lastname'
                                onHandleChange={(e) => handleChange(e)}
                                onHandleBlur={(e) => handleBlur(e)}
                                errors = {errors.lastname}
                                touched = {touched.lastname}
                            />

                            <label>Message:</label>
                            <FormElem 
                                elData={{element: 'textarea', type:'text', value:values.message}}
                                placeholder = 'Enter your message'
                                name='message'
                                onHandleChange={(e) => handleChange(e)}
                                onHandleBlur={(e) => handleBlur(e)}
                                errors = {errors.message}
                                touched = {touched.message}
                            />

                            <button type='submit'>
                                SEND
                            </button>

                            {this.state.success !== null?
                                this.state.success === true?
                                    <div>
                                        <div>Sent successfully</div>
                                    </div>
                                :
                                    <div>
                                        <div>Something went wrong.. Please try again</div>
                                    </div>
                            :null}
                        </form>
                    )}

                </Formik>
                </div>
            </div>
        )
    }
}

export default Contact;