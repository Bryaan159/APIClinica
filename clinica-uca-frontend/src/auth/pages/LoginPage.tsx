import { useState } from 'react';
import ClinicaLogo from 'assets/logos/logo-horizontal-blanco.png';
import { useForm } from 'hooks';
import { PasswordField, TextField } from 'ui';

// formData
const formData = {
    idCardNumber: '',
    password: '',
}

// formValidations
const formValidations = {
    idCardNumber: [(value: string) => value.length >= 1, 'Campo obligatorio.'],
    password: [(value: string) => value.length >= 1, 'Campo obligatorio.'],
}

export const LoginPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const {
        idCardNumber,
        password,
        isFormValid,
        idCardNumberValid,
        passwordValid,
        onInputChange
    } = useForm(formData, formValidations);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        console.log('submitting');
    }

    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col items-center">
                {/* Logo */}
                <div className="w-full bg-primary flex justify-center p-4">
                    <img src={ClinicaLogo} alt='Clínica UCA Logo' className='w-[70%]'></img>
                </div>

                {/* Formulario */}
                <div className="w-[90%] px-4 py-2">
                    <form onSubmit={handleSubmit} className='animate__animated animate__fadeIn animate__faster'>
                        <TextField
                            label='Número de carnet'
                            name="idCardNumber"
                            value={idCardNumber}
                            onInputChange={onInputChange}
                            formSubmitted={formSubmitted}
                            isFieldValid={idCardNumberValid}
                            errorMessage={idCardNumberValid}
                        />

                        <PasswordField
                            label="Contraseña"
                            name="password"
                            value={password}
                            onInputChange={onInputChange}
                            formSubmitted={formSubmitted}
                            isFieldValid={passwordValid}
                            errorMessage={passwordValid}
                        />

                        <div className='p-2 mt-2 flex justify-center'>
                            <button
                                type='submit'
                                className='btn btn-primary w-full'
                            >
                                Iniciar sesión
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
