import {navbar, navlinks} from "./Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={navbar}>
        <ul className={navlinks}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PRODUCT</li>
            <li>STORE</li>
        </ul>
    </nav>
  )
}

