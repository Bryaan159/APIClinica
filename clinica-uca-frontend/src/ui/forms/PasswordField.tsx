import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export const PasswordField = ({ label, name, value, onInputChange, formSubmitted, isFieldValid, errorMessage }: 
    { label: string, name: string, value: string, onInputChange: () => void, formSubmitted?: boolean,
        isFieldValid?: boolean, errorMessage?: string, }) => {
    
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="form-group p-2">
            <div>
                <label htmlFor={name} className="font-semibold">{label}</label>
            </div>

            <div className="input-group flex items-center relative">
                <input
                    type={showPassword ? "text" : "password"}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onInputChange}
                    className="w-full mt-[2px] px-2 py-[6px] rounded-md text-primary border border-solid border-gray focus:outline-none focus:border-primary"
                />     

                {   showPassword 
                    ? <FaEyeSlash onClick={handleShowPassword} color='#112A56' size='16px' style={{ position: 'absolute', right: '10px', cursor: 'pointer' }} />    
                    : <FaEye onClick={handleShowPassword} color='#112A56' size='16px' style={{ position: 'absolute', right: '10px', cursor: 'pointer' }} />
                }

                
            </div>
            {
                !!isFieldValid && formSubmitted && <p className="text-error font-semibold">{errorMessage}</p>
            }
        </div>

    )
}