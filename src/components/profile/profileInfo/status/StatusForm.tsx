import React, { ChangeEventHandler } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from "../../../common/button/Button";
import Input from "../../../common/formControls/CustomInputForm";

interface StatusFormType {
    status: string,
}

type PropsType = {
    onStatusUpdate: (data: string) => void,
    initValue: string,
}


const StatusForm: React.FC<PropsType> = ({ onStatusUpdate, initValue }) => {

    const { handleSubmit, control, formState: {errors}} = useForm<StatusFormType>({ 
        defaultValues: { status: initValue }, mode: "onChange"
    });

    const onStatusSubmit: SubmitHandler<StatusFormType> = (data) => {
        onStatusUpdate(data.status);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onStatusSubmit)}>
                <Controller
                control={control}
                name='status'
                rules={{maxLength: {value: 30, message: 'max length is 30 symbols'}}}
                render={({field}) => <Input {...field} 
                error={errors.status?.message} autoFocus={true}/>}/>
                <Button>Update</Button>
            </form>
        </div>
    )
}

export default StatusForm;


