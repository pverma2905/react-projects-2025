import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <nav>
            <ul className="flex flex-row justify-end p-4 bg-gray-800 text-white">
            <li className='px-4'><Link to="/">Home</Link></li>
            <li className='px-4'><Link to="/new">Add User</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Header