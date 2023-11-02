import { FaCircleExclamation } from "react-icons/fa6";

export const TextField = ({ label, name, value, onInputChange, formSubmitted, isFieldValid, errorMessage, minHeightLabel,
    maxLength, validateKeyDown }:
    {
        label: string, name: string, value: string, onInputChange: () => void, formSubmitted?: boolean,
        isFieldValid?: boolean, errorMessage?: string, minHeightLabel?: string, maxLength?: number, validateKeyDown?: (event: any) => boolean
    }) => {
    return (
        <div className="form-group p-2">
            <div className={`${minHeightLabel !== null ? 'h-[' + minHeightLabel + '] min-[460px]:h-auto' : ''} flex items-end`}>
                <label
                    htmlFor={name}
                    className='font-semibold'
                >
                    {label}
                </label>
            </div>

            <div className="input-group flex items-center relative">
                <input
                    type="text"
                    name={name}
                    id={name}
                    value={value}
                    onChange={onInputChange}
                    autoComplete="off"
                    maxLength={maxLength}
                    onKeyDown={validateKeyDown}
                    className="w-full mt-[2px] px-2 py-[6px] rounded-md text-primary border border-solid border-gray focus:outline-none focus:border-primary"
                />
                {
                    !!isFieldValid && formSubmitted && <FaCircleExclamation color='#B3261E' size='16px' style={{ position: 'absolute', right: '8px' }} />
                }
            </div>
            {
                !!isFieldValid && formSubmitted && <p className="text-error font-semibold">{errorMessage}</p>
            }
        </div>
    )
}

