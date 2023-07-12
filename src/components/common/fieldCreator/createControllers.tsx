import { Controller } from "react-hook-form";
import Input from "../formControls/CustomInputForm";

export function CreateController <T extends string>(name: T, errorMes: string | undefined, maxLength: number,
    control: any, required: boolean, autoFocus: boolean, placeholder?: string, type?: string): React.ReactNode{
    return (
        <Controller name={name} control={control}
            render={({ field }) => <Input {...field} autoFocus={autoFocus}
                placeholder={placeholder} error={errorMes} type={type}/>}
                rules={{
                    required: required ? 'field is required' : false, 
                    maxLength: {
                        value: maxLength,
                        message: `max length is ${maxLength} symbols`
                    }
                }}/>
    )
}



