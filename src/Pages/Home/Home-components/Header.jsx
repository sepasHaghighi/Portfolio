// Component to create the Header section
export default function Header() {
  return (
    <>
     <nav className='nav sticky bg-white top-0 h-14 w-[100vw] px-[2rem] flex justify-between items-center'>
      <a href="#work">WORK</a>
      <a href="#about">ABOUT</a>
      <a href="https://docs.google.com/document/d/1uXVeeZ4s-9zc5UMU0MTMIkZoFoBvJm5ZTs85BZFqZ6I/edit?usp=sharing" target="_blank">DOWNLOAD CV</a>
      <a href="#contact">CONTACT</a>
     </nav>
    </>
  )
}
