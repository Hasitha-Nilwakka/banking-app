import clsx from "clsx"

export default function Button({variant = 'primary', size = 'md', disabled, type = 'button', onClick, children}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
            'font-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-3 focus-visible:ring-offset-1 focus-visible:outline-none', 
                {
                    'bg-primary-500 hover:bg-primary-600 text-amber-50 active:bg-primary-700 focus-visible:ring-primary-500 ' : variant === 'primary',
                    'bg-secondary-500 hover:bg-secondary-600 text-amber-50 active:bg-secondary-700 focus-visible:ring-secondary-500' : variant === 'secondary',
                    'bg-accent-500 hover:bg-accent-600 text-black active:bg-accent-700 focus-visible:ring-accent-500' : variant === 'accent',
                    'bg-danger-500 hover:bg-danger-600 text-amber-50 active:bg-danger-700 focus-visible:ring-danger-500' : variant === 'danger',
                    'bg-success-500 hover:bg-success-600 text-amber-50 active:bg-success-700 focus-visible:ring-success-500' : variant === 'success',
                    'bg-neutral-500 hover:bg-neutral-600 text-black active:bg-neutral-700 focus-visible:ring-neutral-500  ' : variant === 'neutral',
                    'text-3xl py-3 px-6 rounded-full' : size === 'xl',
                    'text-2xl py-2.5 px-5 rounded-xl' : size === 'lg',
                    'text-base py-2 px-4 rounded-lg' : size === 'md',
                    'text-sm py-1.5 px-3 rounded-md' : size === 'sm',
                }
            )}
        >{children}</button>
    )
}