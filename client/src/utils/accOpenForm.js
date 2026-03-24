const accFormObj = {
    accountType : '',
    firstName : '',
    lastName : '',
    idNo : '',
    dob : '',
    email : '',
    phone : '',
    address : '',
    postalCode : '',
    city : '',
    errors : {
        accountType : false,
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
        address : false,
        postalCode : false,
        city : false        
    },
}

export default accFormObj