import pool from "./index";

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS customers(
                id SERIAL PRIMARY KEY,
                full_name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                nic VARCHAR(20) UNIQUE,
                phone_country_code VARCHAR(4),
                phone_no VARCHAR(20),
                address TEXT,
                postal_code VARCHAR(10),
                city TEXT,
                country TEXT,
                created_at TIMESTAMP DEFAULT NOW()
            );

            CREATE TABLE IF NOT EXISTS employee(
                id SERIAL PRIMARY KEY,
                full_name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                nic VARCHAR(20) UNIQUE,
                phone_country_code VARCHAR(4),
                phone_no VARCHAR(20),
                address TEXT,
                postal_code VARCHAR(10),
                city TEXT,
                country TEXT,
                role VARCHAR(20) CHECK (role IN ('junior', 'executive', 'manager', 'admin')) NOT NULL,
                permission_class VARCHAR(1) CHECK (permission_class in ('A', 'B', 'C')) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            );

            CREATE TABLE IF NOT EXISTS accounts (
                id SERIAL PRIMARY KEY,
                customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
                account_number VARCHAR(20) UNIQUE NOT NULL,
                type VARCHAR(20) CHECK (type IN ('savings', 'current', 'fixed')) NOT NULL,
                balance NUMERIC(15,2) DEFAULT 0.00,
                status VARCHAR(20) CHECK (status IN ('active', 'inactive', 'frozen')) DEFAULT 'active',
                opened_at TIMESTAMP DEFAULT NOW()
            );
            
            CREATE TABLE IF NOT EXISTS transactions (
                id SERIAL PRIMARY KEY,
                account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE,
                type VARCHAR(20) CHECK (type IN ('credit', 'debit', 'transfer')) NOT NULL,
                amount NUMERIC(15,2) NOT NULL,
                description TEXT,
                reference VARCHAR(50),
                created_at TIMESTAMP DEFAULT NOW()
            );
            
            CREATE TABLE IF NOT EXISTS loans (
                id SERIAL PRIMARY KEY,
                customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
                type VARCHAR(50) CHECK (type IN ('personal', 'home', 'vehicle', 'business')) NOT NULL,
                amount NUMERIC(15,2) NOT NULL,
                interest_rate NUMERIC(5,2) NOT NULL,
                term_months INTEGER NOT NULL,
                monthly_payment NUMERIC(15,2) NOT NULL,
                remaining_months INTEGER NOT NULL,
                status VARCHAR(20) CHECK (status IN ('pending', 'active', 'rejected', 'completed')) DEFAULT 'pending',
                applied_at TIMESTAMP DEFAULT NOW()
            );

             CREATE TABLE IF NOT EXISTS branches (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                address TEXT NOT NULL,
                city VARCHAR(50) NOT NULL,
                phone VARCHAR(20),
                manager VARCHAR(100),
                created_at TIMESTAMP DEFAULT NOW()
            );

            CREATE TABLE IF NOT EXISTS interest_rates (
                id SERIAL PRIMARY KEY,
                loan_type VARCHAR(50) UNIQUE NOT NULL,
                rate NUMERIC(5,2) NOT NULL,
                updated_at TIMESTAMP DEFAULT NOW(),
                updated_by INTEGER REFERENCES employee(id)
            );
        `)
        console.log('Tables created successfully')
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log('Error creating tables', err.message)
        }
    } finally {
        process.exit()
    }
}

createTables()