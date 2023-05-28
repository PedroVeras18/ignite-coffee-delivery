import { ChangeEvent } from "react";
import './Input.css'

type IInputProps = {
    width?: string;
    value: string;
    placeholder: string;
    type?: 'text' | 'number';
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    type = 'text', value, onChange, width, placeholder
}: IInputProps) {
    return (
        <div className="Input">
            <input
                style={{ width: width }}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}