import Button from "@/components/ui/Button"
export default function LinksSection() {
    return (
        <div className="
            bg-neutral-50 flex flex-col gap-2 py-10 mt-5 px-20
            md:flex md:flex-row md:justify-center    
        ">
            <Button>Open Account Now</Button>
            <Button variant ='secondary'>Apply for a Loan</Button>
            <Button variant ='accent'>Get In Touch With Us</Button>
        </div>
    )
}