import { useEffect, useMemo, useState } from 'react';

export interface FormTarget {
    name: string,
    value: string
}

export const useForm = ( initialForm: any, formValidations: any = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState<any>(formValidations);

    useEffect(() => {
        createValidators();
    }, [ formState ])

    const isFormValid = useMemo( () => {
        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }
        return true;
    }, [ formValidation ])

    const onInputChange = ( {target}: {target: FormTarget} ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues: any = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : (typeof(errorMessage) === 'string' ? errorMessage : errorMessage(formState[formField]));
        }

        setFormValidation( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        setFormState,

        ...formValidation,
        isFormValid
    }
}