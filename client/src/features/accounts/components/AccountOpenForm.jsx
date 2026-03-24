import { forwardRef, useContext } from "react";
import Button from "@/components/ui/Button";
import accountsWebPage from "@/constants/accountDescriptions"
import finland_municipalities from "@/constants/cities"
import { AccContext } from "@/pages/public/AccountsPage";

const AccountOpenForm = forwardRef((props, ref) => {

    const inputStyle = "border rounded-md px-2 py-0.5 w-50"
    const {selectedAcc} = useContext(AccContext)

    return (
        <div ref={ref} tabIndex={-1} className="flex flex-col">
            <div>
                <h2 className="bg-accent-700 text-neutral-50 text-xl text-center py-3">Open a new account</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 px-15 mb-5 text-primary-700">
                <label htmlFor="accountType">Account Type</label>
                <select id="accountType" className={inputStyle}>
                    <option value="0">Select Account</option>
                    {accountsWebPage.map((acc, i) => {
                        return <option key={i} value={acc.varName}>{acc.name}</option>
                    })}
                </select>

                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className={inputStyle}/>

                <label htmlFor="LastName">Last Name</label>
                <input type="text" id="lastName" className={inputStyle}/>

                <label htmlFor="idNo">Identification No</label>
                <input type="text" id="idNo" maxLength={11} className={inputStyle}/>

                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" className={inputStyle}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" className={inputStyle}/>

                <label htmlFor="phone">Phone No</label>
                <input type="tel" id="phone" className={inputStyle}/>

                <label htmlFor="address">Address</label>
                <input type="text" id="address" className={inputStyle}/>

                <label htmlFor="postalCode">Postal Code</label>
                <input type="tel" id="postalCode" className={inputStyle}/>

                <label htmlFor="city">City</label>
                <div>
                    <input list="cities" id="city" className={inputStyle}/>
                    <datalist id="cities">
                        {finland_municipalities.map((city, i) => {
                            return <option value={city} key={i}>{city}</option>
                        })}
                    </datalist>
                </div>
            </div>
            <div className="mb-5 text-center">
                <Button>Open Account</Button>
            </div>
        </div>
    )
})

AccountOpenForm.displayName = 'AccountOpenForm'

export default AccountOpenForm