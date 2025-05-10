function ContactItem(props) {
    return (
        <div className='w-[100%] flex flex-row align-baseline p-2 gap-1'>
            <img src={props.img} alt={props.alt} />
            <span>
                <a href={props.link} target="_blank">{props.linkName}</a>
            </span>
        </div>
    )
}

const contactItems = [
    {
        id: 1,
        img: './src/assets/email.png',
        alt: 'Email',
        link: 'mailto:Haghighi.sepas@gmail.com',
        linkName: 'Haghighi.sepas@gmail.com'
    },
    {
        id: 2,
        img: './src/assets/linkedin.png',
        alt: 'LinkedIn',
        link: 'https://www.linkedin.com/in/sepas-haghighi/',
        linkName: 'LinkedIn'
    }
]

const contactList = contactItems.map((item) => {
    return <ContactItem
        key={item.id}
        img={item.img}
        alt={item.alt}
        link={item.link}
        linkName={item.linkName} />
})

export default function Contact() {
    return (
            <div className='contact h-[95vh] w-[100%] flex flex-col justify-center' id='contact'>
                <h2>CONTACT ME.</h2>
                {contactList}
            </div>
        )
    }