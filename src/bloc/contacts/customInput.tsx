import React, {  } from 'react'

interface CustomInputProps {
    label: string;
    placeholder?: string;
    stateSetter?: React.Dispatch<React.SetStateAction<string>>;
    state?: string;
    type: string;
    id: string;
}

export const CustomInput: React.FunctionComponent<CustomInputProps> = ({label, stateSetter, type, placeholder, id, state}) => {
  return (
    <div className='form__wrap'>
        <label htmlFor={id} className="form__label">{label}</label><br/>
        <input
            className='input' 
            type={type} 
            id={id} 
            placeholder={placeholder || label}
            value={state}
            onChange={(e) => {stateSetter && stateSetter(e.target.value)}}
        /><br/>
    </div>
  )
}
