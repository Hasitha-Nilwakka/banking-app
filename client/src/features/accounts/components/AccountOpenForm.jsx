import { forwardRef, useContext, useReducer, useEffect } from "react";
import Button from "@/components/ui/Button";
import accountsWebPage from "@/constants/accountDescriptions"
import { validateTwoObjects, allFieldsValidated } from "@/utils/formFieldValidation";
import finland_municipalities from "@/constants/cities"
import { AccContext } from "@/pages/public/AccountsPage";
import accFormObj from "@/utils/accOpenForm";

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD' : {
            return {
                ...state,
                [action.target] : action.value
            }
        }
        case 'VALIDATE' : {
            const errors = validateTwoObjects(state.errors, state)
            return {
                ...state,
                errors
            }
        }
        default :
            return state
    }
}

const AccountOpenForm = forwardRef((props, ref) => {
    const {selectedAcc} = useContext(AccContext)
    const [inputValue, dispatch] = useReducer(reducer, accFormObj)
    const inputStyle = "border rounded-md px-2 py-0.5 w-50"

    const updateInput = (e) => {
        dispatch({type : 'UPDATE_FIELD', target : e.target.id, value : e.target.value})
    }

    const validateInput = () => {
        dispatch({type : 'VALIDATE'})
    }

    useEffect(() => {
        const isValidate = allFieldsValidated(inputValue)
        if (isValidate) console.log('validated')
    }, [inputValue.errors])

    return (
        <div 
            ref={ref} 
            tabIndex={-1} 
            className="flex flex-col md:items-center"
        >
            <div className="md:min-w-full">
                <h2 className="bg-accent-700 text-neutral-50 text-xl text-center py-3 lg:text-2xl">Open a new account</h2>
            </div>
            <div 
                className="grid grid-cols-2 gap-2 mt-2 px-15 mb-5 text-primary-700 md:mt-5 lg:text-lg lg:grid-cols-4"
            >
                <label htmlFor="accountType">Account Type</label>
                <div>
                    <select id="accountType" className={inputStyle} value={inputValue?.accountType} onChange={updateInput}>
                        <option value="0">Select Account</option>
                        {accountsWebPage.map((acc, i) => {
                            return <option key={i} value={acc.varName}>{acc.name}</option>
                        })}
                    </select>
                    {inputValue.errors.accountType ? <p className="text-danger-500">* select account type</p> : null}
                </div>

                <label htmlFor="firstName">First Name</label>
                <div>
                    <input type="text" id="firstName" className={inputStyle} value={inputValue?.firstName} onChange={updateInput}/>
                    {inputValue.errors.firstName ? <p className="text-danger-500">* first name is required</p> : null}
                </div>

                <label htmlFor="LastName">Last Name</label>
                <div>
                    <input type="text" id="lastName" className={inputStyle} value={inputValue?.lastName} onChange={updateInput}/>
                    {inputValue.errors.lastName ? <p className="text-danger-500">* last name is required</p> : null}
                </div>

                <label htmlFor="idNo">Identification No</label>
                <div>
                    <input type="text" id="idNo" maxLength={11} className={inputStyle} value={inputValue?.idNo} onChange={updateInput}/>
                    {inputValue.errors.idNo.error ? <p className="text-danger-500">{inputValue.errors.idNo.errMsg}</p> : null}
                </div>    

                <label htmlFor="dob">Date of Birth</label>
                <div>
                    <input type="date" id="dob" className={inputStyle} value={inputValue?.dob} onChange={updateInput}/>
                    {inputValue.errors.dob ? <p className="text-danger-500">* date of birth is required</p> : null}
                </div>    

                <label htmlFor="email">Email</label>
                <div>
                    <input type="email" id="email" className={inputStyle} value={inputValue?.email} onChange={updateInput}/>
                    {inputValue.errors.email.error ? <p className="text-danger-500">{inputValue.errors.email.errMsg}</p> : null}
                </div>    

                <label htmlFor="phone">Phone No</label>
                <div>
                    <input type="tel" id="phone" className={inputStyle} value={inputValue?.phone} onChange={updateInput}/>
                    {inputValue.errors.phone.error ? <p className="text-danger-500">{inputValue.errors.phone.errMsg}</p> : null}
                </div>    

                <label htmlFor="address">Address</label>
                <div>
                    <input type="text" id="address" className={inputStyle} value={inputValue?.address} onChange={updateInput}/>
                    {inputValue.errors.address ? <p className="text-danger-500">* address is required</p> : null}
                </div>    

                <label htmlFor="postalCode">Postal Code</label>
                <div>
                    <input type="tel" id="postalCode" className={inputStyle} value={inputValue?.postalCode} onChange={updateInput}/>
                    {inputValue.errors.postalCode ? <p className="text-danger-500">* postal code is required</p> : null}
                </div>

                <label htmlFor="city">City</label>
                <div>
                    <input list="cities" id="city" className={inputStyle} value={inputValue?.city} onChange={updateInput}/>
                    <datalist id="cities">
                        {finland_municipalities.map((city, i) => {
                            return <option value={city} key={i}>{city}</option>
                        })}
                    </datalist>
                    {inputValue.errors.city ? <p className="text-danger-500">* city is required</p> : null}
                </div>
            </div>
            <div className="mb-5 text-center">
                <Button variant="success" size='lg' onClick={validateInput}>Open Account</Button>
            </div>
        </div>
    )
})

AccountOpenForm.displayName = 'AccountOpenForm'

export default AccountOpenForm