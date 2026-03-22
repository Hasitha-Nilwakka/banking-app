import Button from "@/components/ui/Button"
import { useState } from "react"
import { forwardRef } from "react"

const inputStyle = 'border rounded-md pl-2 py-0.5'

export const LoanApplicationForm = forwardRef((props, ref) => {
    const [inputValue, setInputValue] = useState({
        firstName : '',
        lastName : '',
        idNo : '',
        dob : '',
        email: '',
        phone: '',
        amount: '',
        period : '',
        purpose : '',
        emStatus : '',
        emType : '',
        expenses : '',
        income : '',
        concent : false
    })

    const [errors, setErros] = useState({
        firstName : false,
        lastName : false,
        idNo : false,
        dob : false,
        email: false,
        phone: false,
        amount: false,
        period : false,
        purpose : false,
        emStatus : false,
        emType : false,
        expenses : false,
        income : false,
        concent : false
    })

    function updateInputValues(e) {
        const target = e.target.id 
        const value = e.target.value
        setInputValue(prevVals => ({prevVals, [target] : value}))
    }
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
                    {errors.firstName ? <p className="text-danger-500">* first name is required</p> : null}
                </div>
                

                <label htmlFor="lastName">Last Name</label>
                <div>
                    <input type="text" value={inputValue.lastName} onChange={(e) => updateInputValues(e)} id="lastName" placeholder="e.g. Doe" className={inputStyle}/>
                    {errors.lastName ? <p className="text-danger-500">* last name is required</p> : null}
                </div>

                <label htmlFor="idNo">Identification Number</label>
                <div>
                    <input type="text" value={inputValue.idNo} onChange={(e) => updateInputValues(e)} id="idNo" placeholder="e.g. 120585-222A" className={inputStyle}/>
                    {errors.idNo ? <p className="text-danger-500">* identification no is required</p> : null}
                </div>

                <label htmlFor="dob">Date of Birth</label>
                <div>
                <input type="date" value={inputValue.dob} onChange={(e) => updateInputValues(e)} id="dob" className={inputStyle}/>
                    {errors.dob ? <p className="text-danger-500">* date of birth is required</p> : null}
                </div>

                <label htmlFor="email">Email</label>
                <div>
                    <input type="text" value={inputValue.email} onChange={(e) => updateInputValues(e)} id="email" placeholder="e.g. john.doe@abc.com" className={inputStyle}/>
                    {errors.email ? <p className="text-danger-500">* email is required</p> : null}
                </div>

                <label htmlFor="phone">Phone No</label>
                <div>
                    <input type="number" value={inputValue.phone} onChange={(e) => updateInputValues(e)} id="phone" maxLength='10' placeholder="e.g. 0421581445" className={inputStyle}/>
                    {errors.phone ? <p className="text-danger-500">* phone no is required</p> : null}
                </div>

                <label htmlFor="amount">Loan Amount €</label>
                <div>
                    <input type="number" value={inputValue.amount} onChange={(e) => updateInputValues(e)} id="amount" placeholder="e.g. 25000" className={inputStyle}/>
                    {errors.amount ? <p className="text-danger-500">* loan amount is required</p> : null}
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
                    {errors.period ? <p className="text-danger-500">* loan period is required</p> : null}
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
                    {errors.purpose ? <p className="text-danger-500">* loan purpose is required</p> : null}
                </div>

                <label htmlFor="emStatus">Employment Status</label>
                <div>
                    <select id="emStatus" value={inputValue.emStatus} onChange={(e) => updateInputValues(e)} className={inputStyle}>
                        <option value="0">Select Status</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="student">Student</option>
                    </select>
                    {errors.emStatus ? <p className="text-danger-500">* employement status is required</p> : null}
                </div>

                <label htmlFor="emType">Employment Type</label>
                <div>
                    <select id="emType" value={inputValue.emType} onChange={(e) => updateInputValues(e)} className={inputStyle}>
                        <option value="0">Select Type</option>
                        <option value="permanant">Permanant</option>
                        <option value="fixed">Fixed-Term</option>
                    </select>
                    {errors.emType ? <p className="text-danger-500">* employement type is required</p> : null}
                </div>

                <label htmlFor="income">Monthly Gross Income €</label>
                <div>
                    <input type="text" id="income" value={inputValue.income} onChange={(e) => updateInputValues(e)} placeholder="e.g. 4000" className={inputStyle}/>
                    {errors.income ? <p className="text-danger-500">* income is required</p> : null}
                </div>

                <label htmlFor="expenses">Monthly Expenditures €</label>
                <div>
                    <input type="text" id="expenses" value={inputValue.expenses} onChange={(e) => updateInputValues(e)} placeholder="e.g. 1200" className={inputStyle}/>
                    {errors.expenses ? <p className="text-danger-500">* expenses is required</p> : null}
                </div>
            </div>
            <div className="flex gap-2 text-primary-700">
                <input type="checkbox" id="concent" value={inputValue.concent} onChange={(e) => updateInputValues(e)}/>
                <label htmlFor="concent">I consent to checking my credit information</label>
                {errors.concent ? <p className="text-danger-500">* please accept the consent for credit check</p> : null}
            </div>
            <div>
                <Button variant='success' disabled={false}>Apply Now</Button>
            </div>
        </div>
    )}
)

LoanApplicationForm.displayName = 'LoanApplicationForm'

export default LoanApplicationForm
