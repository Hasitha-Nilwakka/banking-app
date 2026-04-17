interface FormField {
    value : string
    error : boolean,
    errorMsg : string
}

export default interface FormState {
    fullName : FormField,
    email : FormField,
    phone : FormField,
    idNo : FormField,
    dob : FormField,
    loanAmount : FormField,
    loanPurpose : FormField,
    empStatus : FormField,
    income : FormField,
    submitted : boolean
}

export const initalFormState : FormState = {
    fullName : {value: "", error: false, errorMsg : ""},
    email : {value: "", error: false, errorMsg : ""},
    phone : {value: "", error: false, errorMsg : ""},
    idNo : {value: "", error: false, errorMsg : ""},
    dob : {value: "", error: false, errorMsg : ""},
    loanAmount : {value: "", error: false, errorMsg : ""},
    loanPurpose : {value: "", error: false, errorMsg : ""},
    empStatus : {value: "", error: false, errorMsg : ""},
    income : {value: "", error: false, errorMsg : ""},
    submitted : false
}

type FieldKeys = Exclude<keyof FormState, 'submitted'>

export function validateForm(data : FormState) : FormState {
    const newState : FormState = {...data};
    let isThereErrors : boolean = false;

    (Object.keys(data) as FieldKeys[]).forEach((key) => {
        const field = data[key]

        if (key === 'email') {
            if (field.value === '') {
               isThereErrors = true
                newState[key] = {
                    ...field,
                    error : true,
                    errorMsg : 'email address is required'
                } 
            } else if (!field.value.includes('@')) {
                isThereErrors = true
                newState[key] = {
                    ...field,
                    error : true,
                    errorMsg : 'email address should contain @ character'
                } 
            }
        } else if (key === 'idNo') {
            if (field.value === '') {
               isThereErrors = true
                newState[key] = {
                    ...field,
                    error : true,
                    errorMsg : 'id no is required'
                } 
            } else if (!field.value.includes('-')) {
                isThereErrors = true
                newState[key] = {
                    ...field,
                    error : true,
                    errorMsg : 'id no should contain - character'
                } 
            }
        } else if (key === 'loanPurpose' || key === 'empStatus') {
            if (field.value === '' || field.value === '0') {
               isThereErrors = true
                newState[key] = {
                    ...field,
                    error : true,
                    errorMsg : 'please select an option'
                } 
            }
        } else if (field.value === '') {
            isThereErrors = true
            newState[key] = {
                ...field,
                error : true,
                errorMsg : 'this filed is required'
            }
        }
    })

    newState.submitted = isThereErrors ? false : true

    return newState
}
