import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../../common/button/Button";
import { CreateController } from "../../../common/fieldCreator/createControllers";
import { StatusFormType } from "../../../../types/types";

type PropsType = {
    onStatusUpdate: (data: string) => void,
    initValue: string,
}

const StatusForm: React.FC<PropsType> = React.memo(({ onStatusUpdate, initValue }) => {

    const { handleSubmit, control, formState: {errors}} = useForm<StatusFormType>({ 
        defaultValues: { status: initValue }, mode: "onChange"
    });

    const onStatusSubmit: SubmitHandler<StatusFormType> = (data) => {
        onStatusUpdate(data.status);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onStatusSubmit)}>
                {CreateController<Extract<keyof StatusFormType, string>>("status", errors.status?.message,
                30, control, false, true)}
                <Button>Update</Button>
            </form>
        </div>
    )
})

export default StatusForm;


