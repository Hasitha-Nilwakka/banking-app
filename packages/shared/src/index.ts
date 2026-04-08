export type UserRole = "customer" | "teller" | "admin" | "sysadmin"

export interface BaseUser {
    id : number,
    email : string,
    role : UserRole,
    createdAt : Date
}
