import React from "react"
import { Field } from "redux-form"

export const createField = (name, component, placeholder, validate = [], 
    type = 'text', rest = '', props) => {
    return (
        <div>
            <Field name={name} component={component} placeholder={placeholder}
                validate={validate} type={type} {...props}/> {rest}
        </div>
    )
}