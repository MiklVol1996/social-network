import React from "react";
import { reduxForm } from "redux-form";
import { maxLength } from "../../../../utils/validators";
import { createField } from "../../../common/fieldCreator/createField";
import { Input } from "../../../common/formControls/FormsControls";
import Button from "../../../common/button/Button";

const checkMaxLength = maxLength(50);

const statusForm = ({ handleSubmit, onBlur }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('statusBody', Input(false), '', [checkMaxLength], 'text', null,
                {autoFocus: true})}
            <Button>Update</Button>
        </form>
    )
}

export const StatusFormRedux = reduxForm({ form: 'statusBody' })(statusForm);