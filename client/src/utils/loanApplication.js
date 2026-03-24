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

export {inputObj, validate}