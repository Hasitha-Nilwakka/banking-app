import bcrypt from 'bcryptjs'
import pool from './index'

const seed = async () => {
    try {
        const hashedPassword = await bcrypt.hash('password123', 10)

        //seed customer mock data
        await pool.query(`
            INSERT INTO customers (full_name,email,password,nic,phone_country_code,phone_no,address,postal_code,city,country)
            VALUES
                ('hasitha nilwakka', 'hasitha@abc.com', $1, '891234678D', '+358', '451231223', 'keskus 1', '00001', 'helsinki', 'finland'),
                ('jani mikko', 'jani@def.com', $1, '200287-498K', '+358', '551538224', 'espoo 1', '02230', 'espoo', 'finland')
            ON CONFLICT (email) DO NOTHING;
            `, [hashedPassword])

        //seed employee mock data
        await pool.query(`
            INSERT INTO employee(full_name,email,password,nic,phone_country_code,phone_no,address,postal_code,city,country,role,permission_class)
            VALUES 
                ('james peter', 'james.p@pb.com', $1, '020385-345k', '+358', '451239887', 'pb tower 1', '00001', 'helsinki', 'finland', 'junior', 'C'),
                ('steve hanko', 'steve.h.p@pb.com', $1, '030486-346k', '+358', '451239999', 'pb tower 1', '00001', 'helsinki', 'finland', 'executive', 'B'),
                ('adam bass', 'adam.b@pb.com', $1, '030487-347k', '+358', '451239000', 'pb tower 1', '00001', 'helsinki', 'finland', 'manager', 'A'),
                ('scott pipe', 'scott.p@pb.com', $1, '040488-348k', '+358', '451239111', 'pb tower 1', '00001', 'helsinki', 'finland', 'admin', 'A')
            ON CONFLICT (email) DO NOTHING;
            `,[hashedPassword])

        //seed accounts
        await pool.query(`
            INSERT INTO accounts(customer_id,account_number,type,balance,status)
            VALUES 
                (1, '1000-2345-6789', 'savings', 10000.00, 'active'),
                (2, '1000-1234-3466', 'current', 1000.00, 'active'),
                (1, '1000-3456-5467', 'fixed', 30000.00, 'active')
            ON CONFLICT (account_number) DO NOTHING;
            `)

        //seed transactions
        await pool.query(`
        INSERT INTO transactions (account_id, type, amount, description, reference)
        VALUES
            (1, 'credit', 50000.00, 'Salary Deposit', 'REF001'),
            (1, 'debit', 12000.00, 'Bill Payment', 'REF002'),
            (1, 'debit', 5000.00, 'ATM Withdrawal', 'REF003'),
            (2, 'credit', 20000.00, 'Transfer Received', 'REF004'),
            (3, 'credit', 89000.00, 'Initial Deposit', 'REF005')
        ON CONFLICT DO NOTHING;
        `)

        //seed interest rate
        await pool.query(`
        INSERT INTO interest_rates (loan_type, rate)
        VALUES
            ('personal', 12.50),
            ('home', 8.75),
            ('vehicle', 10.00),
            ('business', 11.25)
        ON CONFLICT (loan_type) DO NOTHING;
        `)

        console.log('Database seeded successfully')
    } catch (err : unknown) {
        if (err instanceof Error) {
            console.log('Seeding failed', err.message)
        }
    } finally {
        process.exit()
    }
}

seed()