import React, { useReducer } from "react"
import { initalFormState, validateForm } from "./formDataStrcuture"
import type FormState from "./formDataStrcuture"
type Action = 
    | {type :'SET_FIELD', field: string, value: string}
    | {type :'SUBMIT'}
    | {type :'RESET'}

function reducer(state : FormState, action: Action ): FormState {
    switch (action.type) {
        case 'SET_FIELD' : {
            return {...state, [action.field] : {value : action.value, error : false, errorMsg : ''}}
        }
        case 'RESET' : {
            return initalFormState
        }
        case 'SUBMIT' : {
            const newState : FormState = validateForm(state)
            return newState
        }
        default : 
            return state
    }
}


function LoanForm() {
    const [formState, dispatch] = useReducer(reducer, initalFormState)

    function handleFormChange(e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        const value : string = e.target.value
        const field : string = e.target.id
        dispatch({type : 'SET_FIELD', field : field, value : value})
    }

    const inputFieldStyle = 'border'
    return (
        <div>
            <div className="flex w-[50vw] py-10">
                <div className="flex flex-col">
                    <label htmlFor="fullName">Full Name</label>
                    <label htmlFor="email">Email</label>
                    <label htmlFor="phone">Phone No</label>
                    <label htmlFor="idNo">ID no</label>
                    <label htmlFor="dob">Date of Birth</label>
                    <label htmlFor="loanAmount">Loan Amount</label>
                    <label htmlFor="loanPurpose">Loan Purpose</label>
                    <label htmlFor="empStatus">Employment Status</label>
                    <label htmlFor="income">Monthly Gross Income</label>
                </div>
                <div className="flex flex-col">
                    <input type="text" id="fullName" className={inputFieldStyle} value={formState.fullName.value} onChange={(e) => handleFormChange(e)}/>
                    {formState.fullName.error ? <p>{formState.fullName.errorMsg}</p> : null}
                    <input type="email" id="email"  className={inputFieldStyle} value={formState.email.value} onChange={(e) => handleFormChange(e)}/>
                    {formState.email.error ? <p>{formState.email.errorMsg}</p> : null}
                    <input type="tel" id="phone"  className={inputFieldStyle} value={formState.phone.value} onChange={(e) => handleFormChange(e)}/>
                    {formState.phone.error ? <p>{formState.phone.errorMsg}</p> : null}
                    <input type="text" id="idNo" className={inputFieldStyle} value={formState.idNo.value} onChange={(e) => handleFormChange(e)}/>
                    {formState.idNo.error ? <p>{formState.idNo.errorMsg}</p> : null}   
                    <input type="date" id="dob" className={inputFieldStyle} value={formState.dob.value} onChange={(e) => handleFormChange(e)}/>
                    {formState.dob.error ? <p>{formState.dob.errorMsg}</p> : null}
                    <input type="number" id="loanAmount" className={inputFieldStyle} value={formState.loanAmount.value} onChange={(e) => handleFormChange(e)}/>
                    {formState.loanAmount.error ? <p>{formState.loanAmount.errorMsg}</p> : null}
                    <select id="loanPurpose" className={inputFieldStyle} value={formState.loanPurpose.value} onChange={(e) => handleFormChange(e)}>
                        <option value="0">Select Purpose</option>
                        <option value="1">Personal</option>
                        <option value="2">Home</option>
                        <option value="3">Car</option>
                        <option value="4">Education</option>
                    </select>
                    {formState.loanPurpose.error ? <p>{formState.loanPurpose.errorMsg}</p> : null}
                    <select id="empStatus" className={inputFieldStyle} value={formState.empStatus.value} onChange={(e) => handleFormChange(e)}>
                        <option value="0">Select Status</option>
                        <option value="1">Employed</option>
                        <option value="2">Self-Employed</option>
                        <option value="3">Unemployed</option>
                    </select>
                    {formState.empStatus.error ? <p>{formState.empStatus.errorMsg}</p> : null}
                    <input type="number" id="income" className={inputFieldStyle} value={formState.income.value} onChange={(e) => handleFormChange(e)}/>
                    {formState.income.error ? <p>{formState.income.errorMsg}</p> : null}
                    
                </div>
            </div>
            <div className="flex gap-10">
                <button className="border" onClick={() => dispatch({type : 'SUBMIT'})}>Submit</button>
                <button className="border" onClick={() => dispatch({type : 'RESET'})}>Clear Form</button>
            </div>
            <div>
                {formState.submitted ? <p>'Your Loan Request Submitted Successfully'</p> : null}
            </div>
        </div>
    )
}

export default LoanForm