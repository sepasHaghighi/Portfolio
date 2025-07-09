// Component to create the Footer section
export default function Footer() {
    return (
        <footer className='w-[100vw] h-8 bg-[#555] text-white flex flex-col justify-center font-light text-sm'>
            <span>{new Date().getFullYear()} Sepas Haghighi. All rights reserved.</span>
        </footer>
    )
}