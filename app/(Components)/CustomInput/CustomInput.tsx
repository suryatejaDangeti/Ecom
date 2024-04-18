'use client'

import { useState } from "react"

const CustomInput = (props: any) => {

    const [errorValue, setErrorValue] = useState('');

    const validation = (fieldValue: any) => {
        if(fieldValue === "" && props.required) {
            setErrorValue(`${props.label} is required.`)
        }
    }

    return (
        <div className="flex items-center">
            {props.label && <label className="text-xs w-72">{props.label}<span className="text-[#43d5b0]"> *</span></label>}
            <div>
                <input
                    className={`w-96 ${props.styledInputs ? props.styledInputs.height : 'h-10' } border-solid border text-xs p-2 outline-none mt-4 mb-4 ${errorValue !== "" && 'border-[red] bg-[#ff000014]'}`}
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={(e) => {
                        return e
                    }}
                    onBlur={(e: any) => {
                        validation(e.target.value)
                    }}
                />
                { errorValue !== "" &&
                    <p className="text-xs w-72 text-[red] mb-2">{errorValue}</p>
                }
            </div>
        </div>
    )
}

export default CustomInput;