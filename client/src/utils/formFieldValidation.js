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

export {validateIdNo, validateEmail, validatePhoneNo}