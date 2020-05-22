import React from 'react';
import * as Yup from 'yup';


export const ContactSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address.').required('This field is required'),
    firstname: Yup.string().required('This field is required'),
    lastname: Yup.string().required('This field is required'),
    message: Yup.string().required('This field is required'),
})

export const FormElem = (props) => {
    let template = null;

    switch (props.elData.element) {
        case 'input': 
            template = <div className='row'>
                <div className='twelve columns'>
                    
                    {props.errors && props.touched ?
                        
                        <div className='error-label'>
                            {props.errors}
                        </div> 
                    :null}
                    
                    <input 
                        type={props.elData.type}
                        name={props.name}
                        onChange = {(e) => props.onHandleChange(e)}
                        onBlur = {(e) => props.onHandleBlur(e)}
                        value = {props.elData.value}
                        placeholder = {props.placeholder}
                    ></input>
                    
                </div>
            </div>

            break;
        case 'textarea': 
            template = <div className='row'>
                <div className='twelve columns'>
                    {props.errors && props.touched ?
                        <div className='error-label'>
                            {props.errors}
                        </div>
                    :null}
                    <textarea 
                        type={props.elData.type}
                        name={props.name}
                        onChange = {(e) => props.onHandleChange(e)}
                        onBlur = {(e) => props.onHandleBlur(e)}
                        value = {props.elData.value}
                        placeholder = {props.placeholder}
                    ></textarea>
                    
                </div>
            </div>

            break;
        default:
            template = null;
    }

    return template
}