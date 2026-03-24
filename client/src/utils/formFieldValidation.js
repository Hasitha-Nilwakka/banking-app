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

//function validate two object comparing values with same keys
function validateTwoObjects(obj, validateWith) {
    const errors = {}
    Object.keys(obj).forEach((key) => {
        const value = validateWith[key]
        if (typeof value === 'string') {
            if (key === 'idNo') {
                const errMsg = validateIdNo(value)
                errors[key] = {
                    error : errMsg !== '' ? true : false,
                    errMsg : errMsg}
            } else if (key === 'email') {
                const errMsg = validateEmail(value)
                errors[key] = {
                    error : errMsg !== '' ? true : false,
                    errMsg : errMsg}
            }else if (key === 'phone') {
                const errMsg = validatePhoneNo(value)
                errors[key] = {
                    error : errMsg !== '' ? true : false,
                    errMsg : errMsg}
            }else {
                errors[key] = value.trim() === ''
            }
        } else if (typeof value === 'number') {
            errors[key] = value === 0
        } else if (typeof value === 'boolean') {
            errors[key] = !value
        }
    })

    return errors
}

function allFieldsValidated(obj) {
  return Object.keys(obj.errors).every(key => {
        if (key === 'idNo' || key === 'email' || key === 'phone') {
            return !obj.errors[key].error
        } else {
            return !obj.errors[key]
        }
    })
} 

export {validateTwoObjects, allFieldsValidated}