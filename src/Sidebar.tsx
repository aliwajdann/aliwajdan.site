interface gc {
    isOpen : boolean
}
const Sidebar:React.FC<gc> = ({isOpen}) => {
    console.log(isOpen)
  return (
    <div className={`h-96 w-44 bg-orange-300 md:block lg:hidden ${isOpen? 'block' : 'hidden'}`}>
    <nav className={`w-2/5 relative`}>
        <ul className={`justify-around absolute -top-12'}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
      </nav>
      <h3>hyy</h3>
    </div>
  )
}

export default Sidebar;