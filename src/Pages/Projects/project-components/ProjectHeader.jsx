import emailIcon from '@/assets/email.png'
import linkedinIcon from '@/assets/linkedin.png'
export default function ProjectHeader() {
    return (
        < nav id="header" className="bg-white sticky top-0 pt-12 pb-10 h-12 w-full flex justify-between items-center" >
            <section id="back">
                <a href="/" className="flex flex-row gap-2 items-center">
                    <span className="material-symbols-rounded">
                        arrow_back
                    </span>
                    <span>Back</span>
                </a>
            </section>
            <section id="web-title"><h3 className="font-light">Portfolio - Sepas Haghighi</h3></section>
            <section id="contact" className="flex flex-row gap-4">
                <a href="mailto:Haghighi.sepas@gmail.com" target="_blank"><img src={emailIcon} alt="email" /></a>
                <a href="https://www.linkedin.com/in/sepas-haghighi/" target="_blank"><img src={linkedinIcon} alt="linkedin" /></a>
            </section>
        </nav >
    )
}