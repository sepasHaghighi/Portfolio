import { TypeAnimation } from 'react-type-animation';

// Component to create the Hero section
export default function Hero() {
    return (
        <div className='hero h-screen pt-[25vh] flex flex-col gap-[25vh] w-[100%]'>
            <div>
                
                <h1>
                    Hi,<br />
                    I am Sepas_ <br />
                    A UX engineer.
                </h1>
                <p>
                    Yes, I can design and code.
                </p>
            </div>
            <a href="#work" className='arrow'><span className="material-symbols-rounded">
                arrow_circle_down
            </span></a>

        </div>
    )
}