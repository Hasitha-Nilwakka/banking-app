import Button from "@/components/ui/Button"
import { forwardRef, useReducer } from "react"
import { validateIdNo, validateEmail, validatePhoneNo, inputObj, validate} from "@/utils/loanApplication"
import { useEffect } from "react"

const inputStyle = 'border rounded-md pl-2 py-0.5 w-full'

const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_FIELD' :{
            return {
                ...state,
                [action.target] : action.value
            }}
        case 'VALIDATE':{
            const errors = {}
            Object.keys(state.errors).forEach((key) => {
                const value = state[key]
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

            return {
                ...state,
                errors
            }}
        default :
        return state
    }
}


const LoanApplicationForm = forwardRef((props, ref) => {
    const [inputValue, dispatch] = useReducer(reducer, inputObj)

    const updateInputValues = (e) => {
        dispatch({type: 'UPDATE_FIELD', target : e.target.id, value : e.target.type === 'checkbox' ? e.target.checked : e.target.value})
    }

    const validateInput = () => {
        dispatch({type : 'VALIDATE'})    
    }

    useEffect(() => {
        const isValidate = validate(inputValue)
        if (isValidate) console.log('validated')
    }, [inputValue.errors])

    return (
        <div className="flex flex-col gap-5 items-center py-5" tabIndex={-1} ref={ref}>
            <div className="bg-primary-500 w-full text-center py-4 text-xl text-neutral-50 font-bold">
               <p>Loan Application Form</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2 text-lg text-primary-700">
                <label htmlFor="firstName">First Name</label>
                <div>
                    <input 
                    type="text"  value={inputValue.firstName} onChange={(e) => updateInputValues(e)}
                    id="firstName" 
                    className={inputStyle} 
                    placeholder="e.g. John"/>
                    {inputValue.errors.firstName ? <p className="text-danger-500">* first name is required</p> : null}
                </div>
                

                <label htmlFor="lastName">Last Name</label>
                <div>
                    <input type="text" value={inputValue.lastName} onChange={(e) => updateInputValues(e)} id="lastName" placeholder="e.g. Doe" className={inputStyle}/>
                    {inputValue.errors.lastName ? <p className="text-danger-500">* last name is required</p> : null}
                </div>

                <label htmlFor="idNo">Identification Number</label>
                <div>
                    <input type="text" maxLength={11} value={inputValue.idNo} onChange={(e) => updateInputValues(e)} id="idNo" placeholder="e.g. 120585-222A" className={inputStyle}/>
                    {inputValue.errors.idNo.error ? <p className="text-danger-500">{inputValue.errors.idNo.errMsg}</p> : null}
                </div>

                <label htmlFor="dob">Date of Birth</label>
                <div>
                <input type="date" value={inputValue.dob} onChange={(e) => updateInputValues(e)} id="dob" className={inputStyle}/>
                    {inputValue.errors.dob ? <p className="text-danger-500">* date of birth is required</p> : null}
                </div>

                <label htmlFor="email">Email</label>
                <div>
                    <input type="email" value={inputValue.email} onChange={(e) => updateInputValues(e)} id="email" placeholder="e.g. john.doe@abc.com" className={inputStyle}/>
                    {inputValue.errors.email.error ? <p className="text-danger-500">{inputValue.errors.email.errMsg}</p> : null}
                </div>

                <label htmlFor="phone">Phone No</label>
                <div>
                    <input type="tel" value={inputValue.phone} onChange={(e) => updateInputValues(e)} id="phone" maxLength='10' placeholder="e.g. 0421581445" className={inputStyle}/>
                    {inputValue.errors.phone.error ? <p className="text-danger-500">{inputValue.errors.phone.errMsg}</p> : null}
                </div>

                <label htmlFor="amount">Loan Amount €</label>
                <div>
                    <input type="number" value={inputValue.amount} onChange={(e) => updateInputValues(e)} id="amount" placeholder="e.g. 25000" className={inputStyle}/>
                    {inputValue.errors.amount ? <p className="text-danger-500">* loan amount is required</p> : null}
                </div>

                <label htmlFor="period">Loan Period (Months)</label>
                <div>
                    <select id="period" value={inputValue.period} onChange={(e) => updateInputValues(e)} className={inputStyle}>
                        <option value="0">Select Period</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                        <option value="60">60</option>
                        <option value="72">72</option>
                    </select>
                    {inputValue.errors.period ? <p className="text-danger-500">* loan period is required</p> : null}
                </div>

                <label htmlFor="purpose">Loan Purpose</label>
                <div>
                    <select id="purpose" value={inputValue.purpose} onChange={(e) => updateInputValues(e)} className={inputStyle}>
                        <option value="0">Select Purpose</option>
                        <option value="personal">Personal</option>
                        <option value="auto">Auto</option>
                        <option value="home">Home</option>
                        <option value="business">Business</option>
                        <option value="study">Study</option>
                        <option value="other">Other</option>
                    </select>
                    {inputValue.errors.purpose ? <p className="text-danger-500">* loan purpose is required</p> : null}
                </div>

                <label htmlFor="emStatus">Employment Status</label>
                <div>
                    <select id="emStatus" value={inputValue.emStatus} onChange={(e) => updateInputValues(e)} className={inputStyle}>
                        <option value="0">Select Status</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="student">Student</option>
                    </select>
                    {inputValue.errors.emStatus ? <p className="text-danger-500">* employement status is required</p> : null}
                </div>

                <label htmlFor="emType">Employment Type</label>
                <div>
                    <select id="emType" value={inputValue.emType} onChange={(e) => updateInputValues(e)} className={inputStyle}>
                        <option value="0">Select Type</option>
                        <option value="permanent">Permanent</option>
                        <option value="fixed">Fixed-Term</option>
                    </select>
                    {inputValue.errors.emType ? <p className="text-danger-500">* employement type is required</p> : null}
                </div>

                <label htmlFor="income">Monthly Gross Income €</label>
                <div>
                    <input type="number" id="income" value={inputValue.income} onChange={(e) => updateInputValues(e)} placeholder="e.g. 4000" className={inputStyle}/>
                    {inputValue.errors.income ? <p className="text-danger-500">* income is required</p> : null}
                </div>

                <label htmlFor="expenses">Monthly Expenditures €</label>
                <div>
                    <input type="number" id="expenses" value={inputValue.expenses} onChange={(e) => updateInputValues(e)} placeholder="e.g. 1200" className={inputStyle}/>
                    {inputValue.errors.expenses ? <p className="text-danger-500">* expenses is required</p> : null}
                </div>
            </div>
            <div className="flex gap-2 text-primary-700">
                <input type="checkbox" id="concent" checked={inputValue.concent} onChange={(e) => updateInputValues(e)}/>
                <label htmlFor="concent">I consent to checking my credit information</label>
                {inputValue.errors.concent ? <p className="text-danger-500">* please accept the consent for credit check</p> : null}
            </div>
            <div>
                <Button variant='success' onClick={validateInput}>Apply Now</Button>
            </div>
        </div>
    )}
)

LoanApplicationForm.displayName = 'LoanApplicationForm'

export default LoanApplicationForm
