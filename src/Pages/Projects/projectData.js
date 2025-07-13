import LineoutImage from "../../assets/Works/Lineout/lineout.jpg"
import LineoutPDF from "@/assets/Works/Lineout/Lineout.pdf"
import SheypoorImage from "../../assets/Works/Sheypoor/Sheypoor.jpeg"
import SheypoorPDF from "@/assets/Works/Sheypoor/Sheypoor.pdf"
import PizzamizeImage from "../../assets/Works/Pizzamize/Pizzamize.png"
import PizzamizePDF from "@/assets/Works/Pizzamize/Pizzamize.pdf"
import StoreHubImage from "../../assets/Works/StoreHub/StoreHub.png"
import StoreHubPDF from "@/assets/Works/StoreHub/StoreHub.pdf"
import StoreHubLogo from "@/assets/Works/StoreHub/StoreHubLogo.jpeg"
import ShifoLogo from "@/assets/ShifoLogo.png"
import ShifoImage from "@/assets/Works/ShifoWebsite/ShifoImg.jpg"
import PalmerBetLogo from "@/assets/PalmerBetLogo.png"
import TeamyarLogo from "@/assets/TeamyarLogo.png"
import StockAppImage from "@/assets/Works/Stock-management-app/Stock-app-3.jpg"

export const projectData = [
    {
        id: "project-1",
        title: "Inventory app",
        img: StockAppImage,
        pdf: null,
        github: "",
        liveDemo: "https://youtube.com/playlist?list=PLRA4ioaTxcm_LzcOcX0zOBhLIzAex_m-P&si=EX9p-iNNqs6hmKhu",
        figma: "https://www.figma.com/design/t6xLMzDqjk9zVotvUK2yO9/Stock-management-app?node-id=5929-146586&t=XecRpUWi5U4z1MM3-1",
        description: "A data-driven inventory tool that enhances stock availability, reduces wastes, and incentivizes users for performance.",
        organization: "Shifo",
        organizationLogo: ShifoLogo,
        skills: ['Product Research', 'Flow Analysis', 'Wireframing', 'Prototyping', 'Testing', 'Visual Design']
    },
    {
        id: "project-2",
        title: "Shifo website",
        img: ShifoImage,
        pdf: null,
        github: "",
        liveDemo: "https://www.shifo.org/",
        figma: "#",
        description: "Website showcasing Shifo Foundation’s healthcare digitalization solutions, designed and built in Webflow.",
        organization: "Shifo",
        organizationLogo: ShifoLogo,
        skills: ['Research', 'Information Architecture', 'Wireframing', 'Prototyping', 'Testing', 'UI Design', 'Webflow']
   
    },
    {
        id: "project-3",
        title: "Lineout",
        img: LineoutImage,
        pdf: LineoutPDF,
        github: "https://github.com/sepasHaghighi/Lineout",
        liveDemo: "https://sepashaghighi.github.io/Lineout/",
        figma: "#",
        description: `A virtual queueing solution that lets users join lines remotely, track wait times in real time, and receive notifications when it's their turn.`,
        organization: "#",
        organizationLogo: null,
        skills: ['Research', 'Information Architecture', 'Wireframing', 'Prototyping', 'Testing', 'UI Design', 'React', 'Tailwind']
    },
    {
        id: "project-4",
        title: "Pizzamize",
        img: PizzamizeImage,
        pdf: PizzamizePDF,
        github: "#",
        liveDemo: "#",
        figma: "#",
        description: `Pizzamize is a restaurant aiming to promote food customization based on customers' taste preferences.`,
        organization: "#",
        organizationLogo: null,
        skills: ['Persona', 'Information Architecture', 'Wireframing', 'Prototyping', ' Treejack Testing', 'UI Design']
    },
    {
        id: "project-5",
        title: "Sheypoor",
        img: SheypoorImage,
        pdf: SheypoorPDF,
        github: "#",
        liveDemo: "#",
        figma: "#",
        description: `Redesigned the Sheypoor website to improve usability, visual consistency, and user flow efficiency.`,
        organization: "#",
        organizationLogo: null,
        skills: ['Research', 'Information Architecture', 'Wireframing', 'Prototyping', 'Testing', 'Visual & Interaction Design']
    },
    {
        id: "project-6",
        title: "StoreHub POS",
        img: StoreHubImage,
        pdf: StoreHubPDF,
        github: "#",
        liveDemo: "#",
        figma: "#",
        description: `An app that digitizes kitchen displays to improve efficiency and ease restaurant management.`,
        organization: "StoreHub",
        organizationLogo: StoreHubLogo,
        skills: ['Research', 'Information Architecture', 'Wireframing', 'Prototyping', 'Testing', 'Visual & Interaction Design']
    },
    
]