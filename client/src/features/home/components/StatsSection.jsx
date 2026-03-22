import uptimeIcoSM from '@assets/uptime-sm.png'
import customerIcoSM from '@assets/customers-sm.png'
import transactionIcoSM from '@assets/transaction-sm.png'
import satisIcoSM from '@assets/satis-sm.png'

export default function StatsSection() {
    const textStyle = 'text-xl text-secondary-700 text-center mt-2 text-wrap'
    const boxStyle = 'shadow-lg shadow-gray-300 p-4 rounded-2xl'
    return (
        <div className="flex flex-col items-center md:px-10 shadow-sm">
            <div className="
                text-2xl italic text-primary-700 py-10 px-9 text-center flex flex-col gap-1
                md:w-[60vw]
            ">
                <blockquote>"For more than five decades, Premium Bank has earned the trust of customers in Finland through outstanding service, advanced banking solutions, and uncompromising security"</blockquote>
                <p className='text-accent-700'>Europe Finance Times</p>
            </div>
            <div className='
                flex flex-col gap-5 items-center mb-5
                md:grid md:grid-cols-4 md:grid-rows-2 md:gap-8
            '>
                <div className={`${boxStyle} md:col-start-1 md:row-start-1`}>
                    <img src={customerIcoSM} alt="image of a girl holding a bank card" />
                    <p className={textStyle}>1M+ Active Users</p>
                </div>
                <div className={`${boxStyle} md:col-start-3 md:row-start-1`}>
                    <img src={transactionIcoSM} alt="image of a customer using mobile platform for an transfer" />
                    <p className={textStyle}>€5B+ Transactions</p>
                </div>
                <div className={`${boxStyle} md:col-start-2 md:row-start-2`}>
                    <img src={uptimeIcoSM} alt="image of a computer screen with code" />
                    <p className={textStyle}>99.9% Uptime Guarantee</p>
                </div>
                <div className={`${boxStyle} md:col-start-4 md:row-start-2`}>
                    <img src={satisIcoSM} alt="image of two shaking hands" />
                    <p className={textStyle}>4.8★ Customer Rating</p>
                </div>
            </div>
        </div>
    )
}