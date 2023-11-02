import { useState } from 'react';
import { useForm } from 'hooks';
import { PasswordField, TextField } from 'ui';
import ClinicaLogoHorizontal from 'assets/logos/logo-horizontal-blanco.png';
import ClinicaLogoVertical from 'assets/logos/logo-cuadrado-blanco.png';

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

const validateNumbersOnly = (event: React.KeyboardEvent) => {
    let tecla = event.key;

    if (tecla !== '0' && tecla !== '1' && tecla !== '2' && tecla !== '3' && tecla !== '4' && tecla !== '5' &&
        tecla !== '6' && tecla !== '7' && tecla !== '8' && tecla !== '9' && tecla !== 'Backspace' && tecla !== 'ArrowLeft' &&
        tecla !== 'ArrowRight' && tecla !== 'Tab') {
        event.preventDefault();
        return false;
    }
    else return true;
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
        <div className="w-screen h-screen flex justify-center md:items-center md:bg-login-wallpaper md:bg-cover">
            <div className="flex flex-col items-center w-full card md:flex-row md:justify-center md:h-[400px] md:max-w-[500px] lg:max-w-[600px] min-[2000px]:max-w-[700px]">
                {/* Logo */}
                <div className="w-full md:w-1/2 md:h-full bg-primary flex justify-center items-center p-4">
                    <img src={ClinicaLogoHorizontal} alt='Clínica UCA Logo' className='w-[70%] min-[500px]:w-[60%] min-[650px]:w-[50%] md:hidden'></img>
                    <img src={ClinicaLogoVertical} alt='Clínica UCA Logo' className='hidden md:block'></img>
                </div>

                {/* Formulario */}
                <div className="w-[90%] min-[500px]:w-[70%] min-[650px]:w-[60%] md:w-1/2 px-4 py-2 md:bg-white md:h-full md:flex md:justify-center md:items-center">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label='Número de carnet'
                            name="idCardNumber"
                            value={idCardNumber}
                            onInputChange={onInputChange}
                            formSubmitted={formSubmitted}
                            isFieldValid={idCardNumberValid}
                            errorMessage={idCardNumberValid}
                            maxLength={8}
                            validateKeyDown={validateNumbersOnly}
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
