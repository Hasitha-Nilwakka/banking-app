function validateIdNo(value) {
    let errorMsg = ''

    if (value === '') {
        errorMsg = '* id no is required'
    } else if (value !== '' && value.length < 11) {
        errorMsg = '* id no must contain 11 characters'
    } else if (value !== '' && value.length === 11 && !value.includes('-')) {
        errorMsg = '* id no must contain - characters'
    }

    return errorMsg
}

function validateEmail(value) {
    let errorMsg = ''

    if (value === '') {
        errorMsg = '* email is required'
    } else if (value !== '' && !value.includes('@')) {
        errorMsg = '* email must contain @ character'
    }

    return errorMsg
}

function validatePhoneNo(value) {
    let errorMsg = ''

    if (value === '') {
        errorMsg = '* phone no is required'
    } else if (value !== '' && value.length !== 10) {
        errorMsg = '* phone no must be 10 digits'
    }

    return errorMsg
}

const inputObj = {
    firstName : '',
    lastName : '',
    idNo : '',
    dob : '',
    email: '',
    phone: '',
    amount: '',
    period : 0,
    purpose :0,
    emStatus :0,
    emType :0,
    expenses : '',
    income : '',
    concent : false,
    errors : {
        firstName : false,
        lastName : false,
        idNo : {
            error : false,
            errMsg : ''
        },
        dob : false,
        email: {
            error : false,
            errMsg : ''
        },
        phone: {
            error : false,
            errMsg : ''
        },
        amount: false,
        period : false,
        purpose : false,
        emStatus : false,
        emType : false,
        expenses : false,
        income : false,
        concent : false
    },
    isValidated : false
}

function validate(obj) {
  return Object.keys(obj.errors).every(key => {
        if (key === 'idNo' || key === 'email' || key === 'phone') {
            return !obj.errors[key].error
        } else {
            return !obj.errors[key]
        }
    })
} 

export {validateIdNo, validateEmail, validatePhoneNo, inputObj, validate}