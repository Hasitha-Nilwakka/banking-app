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

export {inputObj}