export type Role = 'customer' | 'employee' | 'admin'
export type AccountType = 'savings' | 'current' | 'fixed'
export type AccountStatus = 'active' | 'inactive' | 'frozen'
export type LoanType = 'personal' | 'home' | 'vehicle' | 'business'
export type EmployeeRole = 'junior' | 'executive' | 'manager' | 'admin'
export type PermissionClass = 'A' | 'B' | 'C'
export type TransactionType = 'credit' | 'debit' | 'transfer'
export type LoanStatus = 'pending' | 'active' | 'rejected' | 'completed'

export interface Customer {
    id : number
    full_name : string
    email : string
    password : string
    nic : string
    phone_country_code : string
    phone_no : string
    address : string
    postal_code : string
    city : string
    country: string
    created_at : Date
}

export interface Employee {
    id : number
    full_name : string
    email : string
    password : string
    nic : string
    phone_country_code : string
    phone_no : string
    address : string
    postal_code : string
    city : string
    country: string
    role : EmployeeRole
    permission_class : PermissionClass
    created_at : Date
}

export interface Account {
  id: number
  customer_id: number
  account_number: string
  type: AccountType
  balance: number
  status: AccountStatus
  opened_at: Date
}

export interface Transaction {
    id : number
    account_id : number
    type : TransactionType
    amount: number
    description?: string
    reference: string
    created_at: Date
}

export interface Loan {
    id : number
    customer_id : number
    type : LoanType
    amount : number
    interest_rate : number
    term_months : number
    monthly_payment : number
    remaining_months : number
    status : LoanStatus
    applied_at : Date
    decision_at : Date
    loan_payed_off_at : Date
}